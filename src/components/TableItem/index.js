import moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import withReactContent from 'sweetalert2-react-content';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';

import RenderDate from '../RenderDate';
import StatusItem from '../StatusItem';
import ModalDetail from '../ModalDetail';
import { deleteCourse } from '~/services/apiCourse';

const MySwal = withReactContent(Swal);

function TableItem({ type, data }) {
    const [showDetail, setShowDetail] = useState(false);

    const [show, setShow] = useState(false);
    const [numberLesson, setNumberLesson] = useState(0);
    const [numberChapter, setNumberChapter] = useState(0);
    const [numberTime, setNumberTime] = useState('');

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.chapter]);

    useEffect(() => {
        if (type === 'courses') {
            setNumberLesson(countLesson);
            setNumberChapter(data.chapter.length);
            setNumberTime(formattedTime);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, countLesson, formattedTime, data.status]);

    const handleAgreeDelete = useCallback(async () => {
        setShow(false);

        if (type === 'account') {
            const result = await deleteUserByType(data._id, 'uid', currentUser.accessToken);

            if (result.statusCode === 0) {
                (await MySwal.fire('Thành công', `Xóa ${data.name} thành công`, 'success')).isConfirmed &&
                    window.location.reload();
            } else {
                MySwal.fire('Thất bại', result.message, 'error');
            }
        } else if (type === 'courses') {
            const result = await deleteCourse(data._id, currentUser.accessToken, 'uid');

            if (result.statusCode === 0) {
                MySwal.fire('Thành công', `Xóa ${data.title} thành công`, 'success').then(
                    (res) => res.isConfirmed && window.location.reload()
                );
            } else {
                MySwal.fire('Thất bại', result.message, 'error');
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data._id]);

    const handleShowModal = () => {
        if (type === 'courses') {
            setShowDetail(true);
        } else if (type === 'video') {
            setDetailVideo(true);
        } else {
            MySwal.fire('Lỗi', 'Chức năng đang được phát triển', 'error');
        }
    };

    const handleToggleTick = async () => {
        const result = await toggleStatusUser(currentUser.accessToken, 'tick', data._id);

        if (result.statusCode === 0) {
            (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed && window.location.reload();
        } else {
            MySwal.fire('Thất bại', result.message, 'error');
        }
    };

    const handleToggleHome = async () => {
        const result = await toggleStatusVideo(currentUser.accessToken, 'home', data._id);

        if (result.statusCode === 0) {
            (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed && window.location.reload();
        } else {
            MySwal.fire('Thất bại', result.message, 'error');
        }
    };

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
                        <Card style={{ width: '18rem', margin: '0 auto' }}>
                            <Card.Img src={data.image} />
                        </Card>
                    </div>
                </td>
            )}

            <td>
                {type !== 'slide' ? (
                    <div className="text-center">
                        {type !== 'video' ? (
                            <Fragment>
                                <strong>{type === 'account' ? data.email : data.author?.name}</strong>
                                {type === 'courses' && (
                                    <Fragment>
                                        <strong>{numberChapter}</strong>
                                        <div className="mt-2">
                                            <Button variant="success" size="sm" onClick={() => setShowChapter(true)}>
                                                Chi tiết
                                            </Button>
                                        </div>
                                    </Fragment>
                                )}
                            </Fragment>
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
                        <StatusItem type={type} data={data} />
                    )}
                </div>
            </td>

            {type !== 'video' && (
                <td>
                    <div className="text-center">
                        {type === 'courses' && <strong>{numberTime}</strong>}

                        {type === 'account' && <StatusItem type={type} data={data} />}

                        {(type === 'posts' || type === 'slide') && (
                            <RenderDate createdAt={data.createdAt} updatedAt={data.updatedAt} />
                        )}
                    </div>
                </td>
            )}

            {type !== 'posts' && type !== 'video' && type !== 'slide' && (
                <td>
                    <div className="text-center">
                        {type === 'courses' && (
                            <span className="text-center">
                                <strong>{data.pro ? 'Pro' : 'Free'}</strong>
                            </span>
                        )}
                        {type === 'account' && (
                            <Button
                                variant={`${data.tick ? 'success' : 'danger'}`}
                                size="sm"
                                onClick={handleToggleTick}
                            >
                                {data.tick ? 'Bật' : 'Tắt'}
                            </Button>
                        )}
                    </div>
                </td>
            )}

            {type === 'video' && (
                <td>
                    <div className="text-center">
                        <Button
                            variant={`${data.homePage ? 'success' : 'danger'}`}
                            size="sm"
                            onClick={handleToggleHome}
                        >
                            {data.homePage ? 'Bật' : 'Tắt'}
                        </Button>
                    </div>
                </td>
            )}

            {type !== 'posts' && type !== 'slide' && (
                <td>
                    <div className="text-center">
                        {type === 'courses' && <StatusItem type={type} data={data} />}

                        {(type === 'account' || type === 'video') && (
                            <RenderDate createdAt={data.createdAt} updatedAt={data.updatedAt} />
                        )}
                    </div>
                </td>
            )}

            {type === 'courses' && (
                <td>
                    <RenderDate createdAt={data.createdAt} updatedAt={data.updatedAt} />
                </td>
            )}

            <td>
                <div className="text-center">
                    <Button variant="success" className="me-2" size="sm" onClick={handleShowModal}>
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

            {showDetail && <ModalDetail data={data} show={showDetail} setShow={setShowDetail} />}
        </tr>
    );
}

export default TableItem;
