function InputControl({ type, name, placeholder, label, value, setValue }) {
    let Component;

    if (type === 'description') {
        Component = 'textarea';
    } else {
        Component = 'input';
    }

    return (
        <div className="form-group col-md-12 mt-3">
            <label>{label}</label>
            <Component
                name={name}
                type="text"
                rows={5}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

export default InputControl;
