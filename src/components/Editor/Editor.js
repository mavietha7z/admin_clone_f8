import { CKEditor } from 'ckeditor4-react';

const Editor = ({ desc }) => {
    return (
        <div>
            <CKEditor
                initData={desc}
                onInstanceReady={() => {
                    console.log('Editor is ready!');
                }}
            />
        </div>
    );
};

export default Editor;
