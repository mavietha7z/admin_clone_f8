import moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { useEffect, useMemo, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';

import Lesson from '../Lesson';
import Chapter from '../Chapter';
import CourseDetail from '../CourseDetail';
import StatusItem from '~/components/StatusItem';
import RenderDate from '~/components/RenderDate';
import ModalDelete from '~/components/ModalDelete';
import { deleteCourse } from '~/services/apiCourse';

const MySwal = withReactContent(Swal);

function CourseItem({ type, data }) {
    const [show, setShow] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [showLesson, setShowLesson] = useState(false);
    const [showChapter, setShowChapter] = useState(false);

    const [numberTime, setNumberTime] = useState('');
    const [numberLesson, setNumberLesson] = useState(0);
    const [numberChapter, setNumberChapter] = useState(0);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    // Chuyển định dạng thời gian
    const formattedTime = useMemo(() => {
        let totalTime = 0;

        data.chapter.forEach((chapter) => {
            chapter.lesson.forEach((lesson) => {
                const time = lesson.timeVideo;
                const timeInSeconds = parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1]);
                totalTime += timeInSeconds;
            });
        });
        return moment.utc(totalTime * 1000).format('HH : mm : ss');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.chapter]);

    // Tính số bài trong khóa học
    const countLesson = useMemo(() => {
        let count = 0;

        for (let i = 0; i < data.chapter.length; i++) {
            count += data.chapter[i].lesson.length;
        }
        return count;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.chapter]);

    useEffect(() => {
        setNumberLesson(countLesson);
        setNumberChapter(data.chapter.length);
        setNumberTime(formattedTime);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, countLesson, formattedTime, data.status]);

    const handleAgreeDelete = async () => {
        setShow(false);

        const result = await deleteCourse(data._id, currentUser.accessToken, 'uid');

        if (result.statusCode === 0) {
            (await MySwal.fire('Thành công', `Xóa ${data.title} thành công`, 'success')).isConfirmed &&
                window.location.reload();
        } else {
            MySwal.fire('Thất bại', result.message, 'error');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    return (
        <tr>
            <td>
                <div className="text-center">
                    <strong>{data.title}</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <Card style={{ width: '18rem', margin: '0 auto' }}>
                        <Card.Img src={data.image} />
                    </Card>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <strong>{numberChapter}</strong>
                    <div className="mt-2">
                        <Button variant="success" size="sm" onClick={() => setShowChapter(true)}>
                            Chi tiết
                        </Button>
                    </div>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <strong>{numberLesson}</strong>
                    <div className="mt-2">
                        <Button variant="success" size="sm" onClick={() => setShowLesson(true)}>
                            Chi tiết
                        </Button>
                    </div>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <strong>{numberTime}</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <span className="text-center">
                        <strong>{data.pro ? 'Pro' : 'Free'}</strong>
                    </span>
                </div>
            </td>

            <StatusItem type={type} data={data} />

            <RenderDate createdAt={data.createdAt} updatedAt={data.updatedAt} />

            <td>
                <div className="text-center">
                    <Button variant="success" className="me-2" size="sm" onClick={() => setShowDetail(true)}>
                        Chi tiết
                    </Button>
                    <Button onClick={() => setShow(true)} variant="danger" size="sm">
                        Xóa
                    </Button>
                </div>
            </td>

            <ModalDelete
                show={show}
                setShow={setShow}
                title={data.name || data.title || data.metaTitle}
                onClick={handleAgreeDelete}
            />

            {showDetail && <CourseDetail data={data} show={showDetail} setShow={setShowDetail} />}
            {showChapter && <Chapter data={data} show={showChapter} setShow={setShowChapter} />}
            {showLesson && <Lesson data={data} show={showLesson} setShow={setShowLesson} />}
        </tr>
    );
}

export default CourseItem;
