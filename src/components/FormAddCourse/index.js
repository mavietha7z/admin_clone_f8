import Select from 'react-select';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { addCourseToGroup, getLearningPathById } from '~/services/apiLearning';

function FormAddCourse({ learningPath }) {
    const [courses, setCourses] = useState([]);
    const [optionGroup, setOptionGroup] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [optionLearningPath, setOptionLearningPath] = useState([]);
    const [selectedLearningPath, setSelectedLearningPath] = useState(null);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        const learning = learningPath.map((learning) => ({
            label: learning.title,
            id: learning._id,
        }));

        setOptionLearningPath(learning);
    }, [learningPath]);

    useEffect(() => {
        if (selectedLearningPath) {
            const fetchApi = async () => {
                const result = await getLearningPathById(currentUser.accessToken, selectedLearningPath.id);

                if (result.statusCode === 0) {
                    const group = result.data.groups.map((group) => ({
                        label: group.title,
                        id: group._id,
                    }));

                    const courses = result.courses.map((course) => ({
                        label: course.title,
                        id: course._id,
                    }));
                    setOptionGroup(group);
                    setCourses(courses);
                }
            };
            fetchApi();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLearningPath]);

    const handleAddCourse = async () => {
        if (!selectedGroup || !selectedCourse || !selectedLearningPath) {
            mySwalError('error', 'Vui lòng chọn đầy đủ');
            return;
        } else {
            const data = {
                learningPathId: selectedLearningPath.id,
                courseId: selectedCourse.id,
            };

            const result = await addCourseToGroup(currentUser.accessToken, data, selectedGroup.id);

            if (result.statusCode === 0) {
                mySwalSuccess(result.message);
            } else {
                mySwalError('fail', result.message);
            }
        }
    };

    return (
        <Form className="p-5">
            <Row>
                <Col ms={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Chọn lộ trình:</Form.Label>
                        <Select
                            value={selectedLearningPath}
                            onChange={setSelectedLearningPath}
                            options={optionLearningPath}
                            className="col-12 p-0"
                            placeholder="Chọn lộ trình"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Chọn nhóm:</Form.Label>
                        <Select
                            value={selectedGroup}
                            onChange={setSelectedGroup}
                            options={optionGroup}
                            className="col-12 p-0"
                            placeholder="Chọn nhóm"
                        />
                    </Form.Group>
                </Col>
                <Col ms={6}>
                    <Form.Group>
                        <Form.Label>Chọn khóa học:</Form.Label>
                        <Select
                            value={selectedCourse}
                            onChange={setSelectedCourse}
                            options={courses}
                            className="col-12 p-0"
                            placeholder="Chọn khóa học"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="success" className="float-end my-5" onClick={handleAddCourse}>
                Thêm khóa học
            </Button>
        </Form>
    );
}

export default FormAddCourse;
