import { useEffect, useState } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import FormAddCourse from '~/components/FormAddCourse';
import FormLearningPath from '~/components/FormLearningPath';
import FormRouteGroup from '~/components/FormRouteGroup';
import { getLearningRoute } from '~/services/apiLearning';

function CreateLearning({ show, setShow }) {
    const [learningPath, setLearningPath] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getLearningRoute('all');

            if (result.statusCode === 0) {
                setLearningPath(result.data);
            }
        };
        fetchApi();
    }, []);

    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton style={{ borderBottom: 'none' }}>
                <Modal.Title>Thêm mới lộ trình</Modal.Title>
            </Modal.Header>

            <Tabs defaultActiveKey="1" id="uncontrolled" className="mb-3 px-5">
                <Tab eventKey="1" title="Thêm lộ trình học">
                    <FormLearningPath />
                </Tab>

                <Tab eventKey="2" title="Thêm nhóm lộ trình">
                    <FormRouteGroup learningPath={learningPath} />
                </Tab>

                <Tab eventKey="3" title="Thêm khóa học vào nhóm">
                    <FormAddCourse learningPath={learningPath} />
                </Tab>
            </Tabs>
        </Modal>
    );
}

export default CreateLearning;
