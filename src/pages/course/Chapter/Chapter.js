import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import { createAxios } from '~/redux/createInstance';
import { loginSuccess } from '~/redux/reducer/authReducer';
import { getCourseById } from '~/services/apiCourse';

import styles from '~/GlobalStyles.module.scss';
import ChapterItem from '~/components/ChapterItem';
import CreateChapter from './CreateChapter';
import CreateLesson from './CreateLesson';

const cx = classNames.bind(styles);

function Chapter() {
    const [currentCourse, setCurrentCourse] = useState(null);
    const [chapters, setChapters] = useState([]);

    const pathName = useLocation().pathname;
    const courseId = pathName.split('/').pop();
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const axiosJWT = createAxios(currentUser, dispatch, loginSuccess);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCourseById(courseId, currentUser.accessToken, axiosJWT);
            setCurrentCourse(result.data);
            setChapters(result?.data.chapter);
        };
        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courseId]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Chương & bài học" />

                    <NavMenu nameHome="Trang chủ" pathHome="/course" colorHome="warning" float="float-right" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className={cx('card-header', 'bg-white', 'header-card')}>
                                <div className="col-md-6 float-left">
                                    <h2 className="mb-0 mt-2">
                                        {!currentCourse ? 'Khóa học này không tồn tại' : currentCourse?.name}
                                    </h2>
                                </div>
                                <div className="col-md-6 float-right">
                                    <div className="float-right">
                                        <div className="input-group">
                                            <select name="type" className="form-control">
                                                <option value="order">Tên khóa học</option>
                                                <option value="order">Tên bài học</option>
                                            </select>
                                            <input
                                                type="text"
                                                name="keyword"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-warning">
                                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="row mb-5">
                                    <CreateChapter courseId={courseId} />

                                    <CreateLesson courseId={courseId} chapters={chapters} />
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="mb-4">Danh sách chương</h2>
                                    </div>

                                    {chapters?.length > 0 ? (
                                        chapters?.map((chapter, index) => (
                                            <div className="mb-2 col-12" key={index}>
                                                <div
                                                    className="btn btn-secondary w-100 text-left"
                                                    style={{ padding: '10px 30px', fontSize: '1.8rem' }}
                                                    data-toggle="collapse"
                                                    data-target={`#collapseExample${index}`}
                                                    aria-expanded="false"
                                                    aria-controls={`collapseExample${index}`}
                                                >
                                                    {`${index + 1}. ${chapter.nameChapter}`}
                                                </div>
                                                <div className="collapse" id={`collapseExample${index}`}>
                                                    {chapter.lesson.length > 0 ? (
                                                        <table className="table table-bordered table-striped dataTable">
                                                            <ChapterItem lesson={chapter.lesson} />
                                                        </table>
                                                    ) : (
                                                        <table className="table table-bordered table-striped dataTable">
                                                            <tbody>
                                                                <tr className="text-center" style={{ fontWeight: 600 }}>
                                                                    <td>Không có bài học nào</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div style={{ backgroundColor: '#f4f6f9' }} className="p-5 w-100">
                                            <div className="text-center">
                                                <span
                                                    className="text-center"
                                                    style={{ fontWeight: 600, fontSize: '1.8rem' }}
                                                >
                                                    Không có chương nào
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chapter;
