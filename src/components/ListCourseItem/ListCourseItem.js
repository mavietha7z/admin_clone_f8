import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Buffer } from 'buffer';
import classNames from 'classnames/bind';
import moment from 'moment';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { handleToggleStatusCourse } from '~/services/apiCourse';
import { createAxios } from '~/redux/createInstance';
import { loginSuccess } from '~/redux/reducer/authReducer';

import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function ListCourseItem({ data }) {
    const [numberLesson, setNumberLesson] = useState(0);
    const [numberChapter, setNumberChapter] = useState(0);
    const [numberTime, setNumberTime] = useState('');

    const dispatch = useDispatch();

    const MySwal = withReactContent(Swal);
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const axiosJWT = createAxios(currentUser, dispatch, loginSuccess);

    const imageData = Buffer.from(data?.image?.data).toString('base64');
    const imageUrl = `data:image/png;base64,${imageData}`;

    useEffect(() => {
        let countLesson = 0;
        let totalTime = 0;

        for (let i = 0; i < data.chapter.length; i++) {
            countLesson += data.chapter[i].lesson.length;
        }
        for (let i = 0; i < data.chapter.length; i++) {
            for (let j = 0; j < data.chapter[i].lesson.length; j++) {
                totalTime += data.chapter[i].lesson[j].timeVideo;
            }
        }
        const hour = Math.floor(totalTime / 3600);
        const minutes = Math.floor((totalTime % 3600) / 60);

        setNumberTime(`${hour} giờ ${minutes} phút`);
        setNumberChapter(data.chapter.length);
        setNumberLesson(countLesson);
    }, [data.chapter]);

    const handleStatusCourse = async (status) => {
        if (typeof status === 'boolean') {
            const result = await handleToggleStatusCourse(data._id, status, currentUser.accessToken, axiosJWT);

            if (result.errCode === 0) {
                MySwal.fire('Thành công', `${result.message}`, 'success').then((res) => {
                    if (res.isConfirmed) {
                        window.location.reload();
                    }
                });
            } else {
                MySwal.fire('Lỗi', `${result.message}`, 'error');
            }
        } else {
            MySwal.fire('Lỗi', 'Trạng thái khóa học không phải kiểu dữ liệu boolean', 'error');
        }
    };

    return (
        <tr>
            <td>
                <div className="text-center">{data.name}</div>
            </td>
            <td>
                <div className="text-center">
                    <img
                        src={imageUrl}
                        alt={data.name}
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
                <div className="text-center">{data.price === 0 ? 'Free' : 'Pro'}</div>
            </td>
            <td>
                <div className="text-center">
                    {data.status ? (
                        <span className="btn btn-success btn-sm" onClick={() => handleStatusCourse(false)}>
                            Bật
                        </span>
                    ) : (
                        <span className="btn btn-danger btn-sm" onClick={() => handleStatusCourse(true)}>
                            Tắt
                        </span>
                    )}
                </div>
            </td>
            <td>
                <div className="text-center">{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</div>
            </td>
            <td>
                <div className="text-center">
                    <Link to={`/course/chapter/${data._id}`}>
                        <span
                            className={cx('btn btn-success btn-sm', 'btn-action')}
                            data-toggle="modal"
                            data-target="#total-order"
                        >
                            <span className="text-white">Chi tiết</span>
                        </span>
                    </Link>
                    <span
                        className={cx('btn btn-danger btn-sm ml-2', 'btn-action')}
                        data-toggle="modal"
                        data-target="#deleteModal"
                    >
                        <span className="text-white">Xóa</span>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default ListCourseItem;
