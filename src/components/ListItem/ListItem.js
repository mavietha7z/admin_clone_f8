import moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';

import { toggleStatusCourse } from '~/services/apiCourse';

const MySwal = withReactContent(Swal);

function ListItem({ type, data }) {
    const [numberLesson, setNumberLesson] = useState(0);
    const [numberChapter, setNumberChapter] = useState(0);
    const [status, setStatus] = useState(false);
    const [numberTime, setNumberTime] = useState('');

    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    // Chuyển định dạng thời gian
    const formattedTime = useMemo(() => {
        if (type === 'courses') {
            let totalTime = 0;

            data.chapter.forEach((chapter) => {
                chapter.lesson.forEach((lesson) => {
                    const time = lesson.timeVideo;
                    const timeInSeconds = parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1]);
                    totalTime += timeInSeconds;
                });
            });
            return moment.utc(totalTime * 1000).format('HH : mm : ss');
        }
    }, [data.chapter]);

    // Tính số bài trong khóa học
    const countLesson = useMemo(() => {
        if (type === 'courses') {
            let count = 0;

            for (let i = 0; i < data.chapter.length; i++) {
                count += data.chapter[i].lesson.length;
            }
            return count;
        }
    }, [data.chapter]);

    useEffect(() => {
        if (type === 'courses') {
            setNumberLesson(countLesson);
            setNumberChapter(data.chapter.length);
            setNumberTime(formattedTime);
            setStatus(data.status);
        }
    }, [type, countLesson, formattedTime, data.status]);

    const handleStatus = useCallback(async () => {
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
    }, [data._id, currentUser]);

    return (
        <tr>
            <td>
                <div className="text-center">
                    <strong>
                        {type !== 'account' && type !== 'posts'
                            ? data.title
                            : type === 'account'
                            ? data.username
                            : data.metaTitle}
                    </strong>
                </div>
            </td>

            {type === 'account' && (
                <td>
                    <div className="text-center">
                        <strong>{data.name}</strong>
                    </div>
                </td>
            )}

            {(type === 'courses' || type === 'slide') && (
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
            )}

            <td>
                {type !== 'slide' ? (
                    <div className="text-center">
                        {type !== 'video' ? (
                            <strong>
                                {type === 'courses'
                                    ? numberLesson
                                    : type === 'account'
                                    ? data.email
                                    : data.author?.name}
                            </strong>
                        ) : (
                            <a
                                className="text-dark"
                                href={`https://youtu.be/${data.urlVideo}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <strong>{data.urlVideo}</strong>
                            </a>
                        )}
                    </div>
                ) : (
                    <div className="text-center" style={{ maxWidth: 700 }}>
                        {data.description}
                    </div>
                )}
            </td>

            <td>
                <div className="text-center">
                    {type === 'courses' && <strong>{numberChapter}</strong>}
                    {type === 'account' && <strong>{data.admin ? 'ADMIN' : 'USER'}</strong>}

                    {(type === 'posts' || type === 'video' || type === 'slide') && (
                        <span className={`btn btn-sm btn-${data.status ? 'success' : 'danger'}`}>
                            {data.status ? 'Bật' : 'Tắt'}
                        </span>
                    )}
                </div>
            </td>

            {type !== 'video' && (
                <td>
                    <div className="text-center">
                        {type === 'courses' && <strong>{numberTime}</strong>}

                        {type === 'account' && (
                            <span className={`btn btn-sm btn-${data.status ? 'success' : 'danger'}`}>
                                {data.status ? 'Hoạt động' : 'Bị khóa'}
                            </span>
                        )}

                        {(type === 'posts' || type === 'slide') && (
                            <>
                                <div className="text-center">
                                    <strong>{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</strong>
                                </div>
                                <div className="text-center">
                                    <strong>{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</strong>
                                </div>
                            </>
                        )}
                    </div>
                </td>
            )}

            {type !== 'posts' && type !== 'video' && type !== 'slide' && (
                <td>
                    <div className="text-center">
                        {type === 'courses' && (
                            <div className="text-center">
                                <strong>{data.pro ? 'Pro' : 'Free'}</strong>
                            </div>
                        )}
                        {type === 'account' && (
                            <span className={`btn btn-sm btn-${data.tick ? 'success' : 'danger'}`}>
                                {data.tick ? 'Bật' : 'Tắt'}
                            </span>
                        )}
                    </div>
                </td>
            )}

            {type !== 'posts' && type !== 'slide' && (
                <td>
                    <div className="text-center">
                        {type === 'courses' && (
                            <span className={`btn btn-sm btn-${status ? 'success' : 'danger'}`}>
                                {status ? 'Bật' : 'Tắt'}
                            </span>
                        )}
                        {(type === 'account' || type === 'video') && (
                            <>
                                <div className="text-center">
                                    <strong>{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</strong>
                                </div>
                                <div className="text-center">
                                    <strong>{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</strong>
                                </div>
                            </>
                        )}
                    </div>
                </td>
            )}

            {type === 'courses' && (
                <td>
                    <div className="text-center">
                        <strong>{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</strong>
                    </div>
                    <div className="text-center">
                        <strong>{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</strong>
                    </div>
                </td>
            )}

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

export default ListItem;
