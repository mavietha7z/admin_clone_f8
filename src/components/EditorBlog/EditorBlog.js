import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { handleCreateNewBlog, handleSelectImage } from '~/services/apiBlog';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mdParser = new MarkdownIt();

function EditorBlog({ title }) {
    const [text, setText] = useState('');
    const [html, setHtml] = useState('');

    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const handleEditorChange = ({ html, text }) => {
        setText(text);
        setHtml(html);
    };

    const handlePublic = async () => {
        const newPost = {
            title,
            author: currentUser._id,
            contentHTML: html,
            contentMarkdown: text,
        };

        const result = await handleCreateNewBlog(newPost);

        if (result.errCode === 0) {
            MySwal.fire('Thành công', `${result.message}`, 'success').then((res) => {
                if (res.isConfirmed) {
                    navigate('/blog');
                }
            });
        } else {
            MySwal.fire('Lỗi', `${result.message}`, 'error');
        }
    };

    const onImageUpload = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        const result = await handleSelectImage(formData);

        if (result.errCode === 0) {
            return result.data.urlImage;
        } else if (result.errCode === 1) {
            MySwal.fire('Lỗi', `${result.message}`, 'error');
        } else {
            MySwal.fire('Lỗi', 'Lỗi gửi ảnh vui lòng liên hệ admin', 'error');
        }
    };

    return (
        <>
            <MdEditor
                style={{ height: '600px' }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
                onImageUpload={onImageUpload}
            />
            <div className="mt-5">
                <button className="btn btn-primary float-right mr-5" onClick={handlePublic}>
                    Xuất bản
                </button>
            </div>
        </>
    );
}

export default EditorBlog;
