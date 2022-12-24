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
import { createNewChapter, createNewLesson, getCourseById } from '~/services/apiCourse';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Select from 'react-select';
import styles from '~/GlobalStyles.module.scss';
import ChapterItem from '~/components/ChapterItem';

const cx = classNames.bind(styles);

function Chapter() {
    const [currentCourse, setCurrentCourse] = useState(null);
    const [chapters, setChapters] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([]);

    const [inputNameChapter, setInputNameChapter] = useState('');
    const [nameLesson, setNameLesson] = useState('');
    const [timeVideo, setTimeVideo] = useState(0);
    const [urlVideo, setUrlVideo] = useState('');

    const MySwal = withReactContent(Swal);
    const dispatch = useDispatch();
    const pathName = useLocation().pathname;
    const id = pathName.split('/').pop();

    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const axiosJWT = createAxios(currentUser, dispatch, loginSuccess);

    useEffect(() => {
        const nameChapter = chapters?.map((chapter) => ({ label: chapter.nameChapter }));

        setOptions(nameChapter);
    }, [chapters]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCourseById(id, currentUser.accessToken, axiosJWT);
            setCurrentCourse(result);
            setChapters(result?.chapter);
        };
        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleCreateNewChapter = async () => {
        if (inputNameChapter !== '') {
            const result = await createNewChapter(id, inputNameChapter, currentUser.accessToken, axiosJWT);

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
            MySwal.fire('Lỗi', 'Tên chương không được để trống', 'error');
        }
    };

    const handleCreateNewLesson = async () => {
        const label = selectedOption.label;
        if (label && nameLesson && timeVideo && urlVideo) {
            const newLesson = {
                nameChapter: label,
                nameLesson: nameLesson,
                timeVideo: Number(timeVideo),
                urlVideo: urlVideo,
            };

            const result = await createNewLesson(id, newLesson, currentUser.accessToken, axiosJWT);
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
            MySwal.fire('Lỗi', 'Thông tin không được để trống', 'error');
        }
    };

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
                                    <div className="col-6">
                                        <div className="card">
                                            <div
                                                className="card-header"
                                                data-toggle="collapse"
                                                data-target="#add-new-chapter"
                                                aria-expanded="false"
                                                aria-controls="add-new-chapter"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <h3>Thêm chương mới</h3>
                                            </div>
                                        </div>
                                        <div className="collapse" id="add-new-chapter">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label>Tên chương:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Tên chương mới"
                                                        value={inputNameChapter}
                                                        onChange={(e) => setInputNameChapter(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary" onClick={handleCreateNewChapter}>
                                                    Thêm chương
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="card">
                                            <div
                                                className="card-header"
                                                data-toggle="collapse"
                                                data-target="#add-new-lesson"
                                                aria-expanded="false"
                                                aria-controls="add-new-lesson"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <h3>Thêm bài mới</h3>
                                            </div>
                                        </div>

                                        <div className="collapse" id="add-new-lesson">
                                            <div className="card-body">
                                                <div className="form-group" style={{ fontSize: '1.6rem' }}>
                                                    <Select
                                                        value={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={options}
                                                        className="col-11 p-0"
                                                        placeholder="Chọn chương để thêm bài"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label className=" w-100">Tên bài:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control mb-2 col-11"
                                                        placeholder="Tên bài học"
                                                        style={{ display: 'inline-block' }}
                                                        value={nameLesson}
                                                        onChange={(e) => setNameLesson(e.target.value)}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label className=" w-100">Thời gian:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control mb-2 col-11"
                                                        placeholder="Thời gian bài học được tính theo giây"
                                                        style={{ display: 'inline-block' }}
                                                        value={timeVideo}
                                                        onChange={(e) => setTimeVideo(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className=" w-100">Url video:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control mb-2 col-11"
                                                        placeholder="Vd: R6plN3FvzFY"
                                                        style={{ display: 'inline-block' }}
                                                        value={urlVideo}
                                                        onChange={(e) => setUrlVideo(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary" onClick={handleCreateNewLesson}>
                                                    Thêm bài
                                                </button>
                                            </div>
                                        </div>
                                    </div>
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
