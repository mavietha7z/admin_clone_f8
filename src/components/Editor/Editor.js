import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('text: ', text);
    console.log('html: ', html);
}

function onImageUpload(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (data) => {
            resolve(data.target.result);
        };
        reader.readAsDataURL(file);
    });
}

export default (props) => {
    return (
        <MdEditor
            style={{ height: '500px' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
            onImageUpload={onImageUpload}
        />
    );
};
