import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { useState } from 'react';

const mdParser = new MarkdownIt();

function EditorLesson({ handleGetDataChild }) {
    const [text, setText] = useState('');
    const [html, setHtml] = useState('');
    // const [content, setContent] = useState('');

    handleGetDataChild({ text, html });

    const handleEditorChange = ({ html, text }) => {
        setText(text);
        setHtml(html);
        // setContent(text);
    };

    return (
        <MdEditor
            style={{ height: '600px' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
        />
    );
}

export default EditorLesson;
