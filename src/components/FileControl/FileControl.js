import React from 'react';

const FileControl = React.forwardRef((props, ref) => {
    return (
        <div className="form-group col-md-12">
            <label>{props.label}:</label>
            {props.image?.preview && (
                <img
                    className="ml-4 mb-4"
                    src={props.image.preview}
                    alt="Preview"
                    style={{
                        width: '160px',
                        height: 'auto',
                        borderRadius: 4,
                    }}
                />
            )}
            <div className="mr-4" style={{ marginLeft: 15 }}>
                <button type="button" className="btn btn-info btn-sm" onClick={() => ref.current.click()}>
                    Chọn ảnh
                </button>
                <input ref={ref} onChange={props.onChang} type="file" name="image" hidden />
            </div>
        </div>
    );
});

export default FileControl;
