import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Col, Form } from 'react-bootstrap';

function LearnWhatInput({ count, setCount, data, onChange, onClick }) {
    return (
        <Form.Group className="mb-3">
            <Form.Label style={{ width: '100%' }}>
                Học được gì sau khóa học:
                <FontAwesomeIcon
                    className="btn btn-success float-end"
                    onClick={() => setCount(count + 1)}
                    icon={faCirclePlus}
                    title="Thêm 1 ô input mới"
                />
            </Form.Label>

            {Array.from({ length: count }, (_, i) => (
                <Fragment key={i}>
                    <Col sm={11} style={{ display: 'inline-block' }}>
                        <Form.Control
                            placeholder="Mô tả những gì sẽ học được"
                            className="mt-2"
                            type="text"
                            defaultValue={data[i]}
                            onChange={(e) => onChange(e, i)}
                        />
                    </Col>

                    {i !== 0 && (
                        <FontAwesomeIcon
                            className="btn btn-danger float-end remove-input"
                            onClick={onClick}
                            icon={faCircleMinus}
                            title="Xóa ô input này"
                        />
                    )}
                </Fragment>
            ))}
        </Form.Group>
    );
}

export default LearnWhatInput;
