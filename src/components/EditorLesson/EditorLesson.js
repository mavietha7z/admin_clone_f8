import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

function EditorLesson({ setText, setHtml }) {
    const handleEditorChange = ({ html, text }) => {
        setText(text);
        setHtml(html);
    };

    return (
        <MdEditor
            style={{ height: '350px' }}
            renderHTML={(text) => mdParser.render(text)}
            autoFocus={true}
            view={{ html: false }}
            onChange={handleEditorChange}
            placeholder="Nhập mô tả bài học tại đây"
        />
    );
}

export default EditorLesson;
