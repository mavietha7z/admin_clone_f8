import { Button } from 'react-bootstrap';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreateButton({ onClick }) {
    return (
        <Button className="float-end mt-5" variant="success" size="xl" onClick={onClick}>
            Thêm mới
            <FontAwesomeIcon className="ms-2" icon={faCirclePlus} />
        </Button>
    );
}

export default CreateButton;
