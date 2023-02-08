import { Spinner } from 'react-bootstrap';

function Loading() {
    return (
        <div className="overlay">
            <Spinner animation="border" role="status" style={{ marginTop: -200, fontSize: '1.8rem' }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loading;
