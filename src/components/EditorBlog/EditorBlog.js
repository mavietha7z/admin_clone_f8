import { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

function EditorBlog() {
    const [text, setText] = useState('');
    const [html, setHtml] = useState('');

    const handleEditorChange = ({ html, text }) => {
        setText(text);
        setHtml(html);
    };

    return (
        <>
            <MdEditor
                style={{ height: '600px' }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
            />
            <div className="mt-5">
                <button className="btn btn-primary float-right mr-5">Xuất bản</button>
            </div>
        </>
    );
}

export default EditorBlog;
