import moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';

import { toggleStatusCourse } from '~/services/apiCourse';

const MySwal = withReactContent(Swal);

function ListCourseItem({ data }) {
    const [numberLesson, setNumberLesson] = useState(0);
    const [numberChapter, setNumberChapter] = useState(0);
    const [status, setStatus] = useState(false);
    const [numberTime, setNumberTime] = useState('');

    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        let countLesson = 0;
        let totalTime = 0;
        setStatus(data.status);

        for (let i = 0; i < data.chapter.length; i++) {
            countLesson += data.chapter[i].lesson.length;
        }

        data.chapter.forEach((chapter) => {
            chapter.lesson.forEach((lesson) => {
                const time = lesson.timeVideo;
                const timeInSeconds = parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1]);
                totalTime += timeInSeconds;
            });
        });

        const formatted = moment.utc(totalTime * 1000).format('HH : mm : ss');

        setNumberTime(formatted);
        setNumberChapter(data.chapter.length);
        setNumberLesson(countLesson);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleStatusCourse = async () => {
        if (currentUser) {
            const result = await toggleStatusCourse(data._id, currentUser.accessToken);

            if (result.statusCode === 0) {
                MySwal.fire('Thành công', `${result.message}`, 'success').then((res) => {
                    if (res.isConfirmed) {
                        window.location.reload();
                    }
                });
            } else {
                MySwal.fire('Lỗi', `${result.message}`, 'error');
            }
        } else {
            navigate('/login');
        }
    };

    return (
        <tr>
            <td>
                <div className="text-center">{data.title}</div>
            </td>
            <td>
                <div className="text-center">
                    <img
                        src={data.image}
                        alt={data.title}
                        style={{
                            width: '160px',
                            height: 'auto',
                            borderRadius: 4,
                        }}
                    />
                </div>
            </td>
            <td>
                <div className="text-center">
                    <div>{numberChapter}</div>
                </div>
            </td>
            <td>
                <div className="text-center">{numberLesson}</div>
            </td>
            <td>
                <div className="text-center">{numberTime}</div>
            </td>
            <td>
                <div className="text-center">{data.pro ? 'Pro' : 'Free'}</div>
            </td>
            <td>
                <div className="text-center">
                    <span className={`btn btn-sm btn-${status ? 'success' : 'danger'}`} onClick={handleStatusCourse}>
                        {status ? 'Bật' : 'Tắt'}
                    </span>
                </div>
            </td>
            <td>
                <div className="text-center">
                    <strong>{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</strong>
                </div>
                <div className="text-center">
                    <strong>{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</strong>
                </div>
            </td>
            <td>
                <div className="text-center">
                    <Link>
                        <span className="btn btn-success btn-sm" data-toggle="modal" data-target=".bd-example-modal-xl">
                            <span className="text-white">Chi tiết</span>
                        </span>
                    </Link>
                    <span className="btn btn-danger btn-sm ml-2">
                        <span className="text-white">Xóa</span>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default ListCourseItem;
