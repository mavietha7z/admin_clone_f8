import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Select from 'react-select';
import { createNewLesson } from '~/services/apiCourse';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/redux/createInstance';
import { loginSuccess } from '~/redux/reducer/authReducer';
import { handleGetInfoVideo } from '~/services/apiVideo';
import EditorLesson from '~/components/EditorLesson';

function CreateLesson({ courseId, chapters }) {
    const [activeBtn, setActiveBtn] = useState(false);

    const [timeVideo, setTimeVideo] = useState('');
    const [nameLesson, setNameLesson] = useState('');
    const [urlVideo, setUrlVideo] = useState('');
    const [descHTML, setDescHTML] = useState('');
    const [descMarkdown, setDescMarkdown] = useState('');

    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([]);

    const MySwal = withReactContent(Swal);
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const axiosJWT = createAxios(currentUser, dispatch, loginSuccess);

    useEffect(() => {
        const nameChapter = chapters?.map((chapter) => ({ label: chapter.nameChapter, id: chapter._id }));

        setOptions(nameChapter);
    }, [chapters]);

    const iso8601ToTimeString = (timeVideo) => {
        const regexp = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
        const matches = regexp.exec(timeVideo);

        if (!matches) return '';
        let hours = matches[1] ? parseInt(matches[1]) : 0;
        let minutes = matches[2] ? parseInt(matches[2]) : 0;
        let seconds = matches[3] ? parseInt(matches[3]) : 0;
        if (hours > 0) {
            if (hours < 10) hours = `0${hours}`;
            if (minutes < 10) minutes = `0${minutes}`;
            if (seconds < 10) seconds = `0${seconds}`;
            return `${hours}:${minutes}:${seconds}`;
        } else {
            if (minutes < 10) minutes = `0${minutes}`;
            if (seconds < 10) seconds = `0${seconds}`;
            return `${minutes}:${seconds}`;
        }
    };

    const handleGetDataChild = ({ text, html }) => {
        setDescHTML(html);
        setDescMarkdown(text);
    };

    const handleCreateNewLesson = async () => {
        const chapterId = selectedOption.id;
        if (chapterId && nameLesson && timeVideo && urlVideo) {
            const newLesson = {
                nameLesson: nameLesson,
                timeVideo: iso8601ToTimeString(timeVideo),
                urlVideo: urlVideo,
                chapterId: chapterId,
                descHTML: descHTML,
                descMarkdown: descMarkdown,
            };

            const result = await createNewLesson(newLesson, currentUser.accessToken, axiosJWT);
            if (result.errCode === 0) {
                MySwal.fire('Thành công', `${result.message}`, 'success');
            } else {
                MySwal.fire('Lỗi', `${result.message}`, 'error');
            }
        } else {
            MySwal.fire('Lỗi', 'Thông tin không được để trống', 'error');
        }
    };

    const handleGetDataVideo = async () => {
        if (urlVideo !== '') {
            const result = await handleGetInfoVideo(urlVideo);
            setActiveBtn(true);
            if (result.errCode === 200) {
                MySwal.fire('Thành công', 'Lấy dữ liệu video thành công', 'success');

                result.data.map((item) => {
                    console.log('item: ', item);
                    setNameLesson(item.snippet.title);
                    setTimeVideo(item.contentDetails.duration);
                });
            } else if (result.errCode === 1) {
                MySwal.fire('Lỗi', `${result.message}`, 'error');
            } else {
                MySwal.fire('Lỗi', 'Lấy dữ liệu video thất bại', 'error');
            }
        } else {
            MySwal.fire('Lỗi', 'Url video không được để trống', 'error');
        }
    };

    return (
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
                        <label className=" w-100">Chọn chương:</label>
                        <Select
                            value={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            className="col-11 p-0"
                            placeholder="Chọn chương để thêm bài"
                        />
                    </div>

                    {activeBtn && (
                        <>
                            <div className="form-group">
                                <label className=" w-100">Tên bài:</label>
                                <input
                                    type="text"
                                    className="form-control mb-2 col-11"
                                    placeholder="Tên bài học"
                                    style={{ display: 'inline-block' }}
                                    value={nameLesson}
                                    onChange={(e) => setNameLesson(e.target.value)}
                                    disabled
                                />
                            </div>

                            <div className="form-group">
                                <label className=" w-100">Thời gian:</label>
                                <input
                                    type="text"
                                    className="form-control mb-2 col-11"
                                    placeholder="Thời gian bài học được tính theo giây"
                                    style={{ display: 'inline-block' }}
                                    value={iso8601ToTimeString(timeVideo)}
                                    onChange={(e) => setTimeVideo(e.target.value)}
                                    disabled
                                />
                            </div>
                        </>
                    )}
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
                    {activeBtn && (
                        <div className="form-group">
                            <div
                                className="btn btn-secondary"
                                data-toggle="collapse"
                                data-target="#add-description"
                                aria-expanded="false"
                                aria-controls="add-description"
                            >
                                Thêm mô tả
                            </div>
                            <div className="collapse" id="add-description">
                                <EditorLesson handleGetDataChild={handleGetDataChild} />
                            </div>
                        </div>
                    )}
                </div>
                <div className="card-footer">
                    {activeBtn ? (
                        <button className="btn btn-success" onClick={handleCreateNewLesson}>
                            Thêm bài học
                        </button>
                    ) : (
                        <button className="btn btn-success" onClick={handleGetDataVideo}>
                            Lấy dữ liệu video
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CreateLesson;
