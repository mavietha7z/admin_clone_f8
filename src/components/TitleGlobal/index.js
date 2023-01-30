import { Col } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumb';

function TitleGlobal({ name }) {
    return (
        <Col sm={5} className="p-4">
            <h1 style={{ fontSize: '3rem', color: '#343a40' }}>{name}</h1>
            <Breadcrumb name={name} />
        </Col>
    );
}

export default TitleGlobal;
