import Swal from 'sweetalert2';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import React, { Fragment, useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';

import { createNewLesson } from '~/services/apiCourse';
import { handleGetInfoVideo } from '~/services/apiVideo';
import EditorLesson from '~/components/EditorLesson';

function CreateLesson({ courseId, chapters }) {
    const [activeBtn, setActiveBtn] = useState(false);

    const [thumbNail, setThumbNail] = useState('');
    const [timeVideo, setTimeVideo] = useState('');
    const [nameLesson, setNameLesson] = useState('');
    const [urlVideo, setUrlVideo] = useState('');
    const [descHTML, setDescHTML] = useState('');
    const [descMarkdown, setDescMarkdown] = useState('');

    const [selected, setSelected] = useState(null);
    const [options, setOptions] = useState([]);

    const MySwal = withReactContent(Swal);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

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
        if (selected) {
            const chapterId = selected.id;

            if (chapterId && nameLesson && timeVideo && urlVideo) {
                const newLesson = {
                    nameLesson: nameLesson,
                    timeVideo: iso8601ToTimeString(timeVideo),
                    urlVideo: urlVideo,
                    thumbNail: thumbNail,
                    chapterId: chapterId,
                    descHTML: descHTML,
                    descMarkdown: descMarkdown,
                };

                const result = await createNewLesson(newLesson, currentUser.accessToken);
                if (result.errCode === 0) {
                    MySwal.fire('Thành công', `${result.message}`, 'success').then(
                        (res) => res.isConfirmed && window.location.reload()
                    );
                } else {
                    MySwal.fire('Lỗi', `${result.message}`, 'error');
                }
            } else {
                MySwal.fire('Lỗi', 'Thông tin không được để trống', 'error');
            }
        }
    };

    const handleGetDataVideo = async () => {
        if (selected) {
            if (urlVideo !== '') {
                const result = await handleGetInfoVideo(urlVideo);
                setActiveBtn(true);
                if (result.errCode === 200) {
                    MySwal.fire('Thành công', 'Lấy dữ liệu video thành công', 'success');

                    result.data.map((item) => {
                        setNameLesson(item.snippet.title);
                        setTimeVideo(item.contentDetails.duration);
                        setThumbNail(item.snippet.thumbnails.maxres.url);

                        return item;
                    });
                } else if (result.errCode === 1) {
                    MySwal.fire('Lỗi', `${result.message}`, 'error');
                } else {
                    MySwal.fire('Lỗi', 'Lấy dữ liệu video thất bại', 'error');
                }
            } else {
                MySwal.fire('Lỗi', 'Url video không được để trống', 'error');
            }
        } else {
            MySwal.fire('Lỗi', 'Vui lòng chọn chương', 'error');
        }
    };

    return (
        <Fragment>
            <div className="row">
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
                                    value={selected}
                                    onChange={setSelected}
                                    options={options}
                                    className="col-12 p-0"
                                    placeholder="Chọn chương để thêm bài"
                                />
                            </div>

                            {activeBtn && (
                                <>
                                    <div className="form-group">
                                        <label className=" w-100">Tên bài:</label>
                                        <input
                                            type="text"
                                            className="form-control mb-2 col-12"
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
                                            className="form-control mb-2 col-12"
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
                                    className="form-control mb-2 col-12"
                                    placeholder="Vd: R6plN3FvzFY"
                                    style={{ display: 'inline-block' }}
                                    value={urlVideo}
                                    onChange={(e) => setUrlVideo(e.target.value)}
                                />
                            </div>
                        </div>
                        {!activeBtn && (
                            <div className="card-footer">
                                <button className="btn btn-success" onClick={handleGetDataVideo}>
                                    Lấy dữ liệu video
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="col-6">
                    <div className="form-group">
                        <label>Thumb nails</label>
                        {thumbNail && (
                            <div className="mt-3 col-12">
                                <img src={thumbNail} width="74%" alt="" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    {activeBtn && (
                        <div className="form-group">
                            <div
                                className="btn btn-secondary mb-4"
                                data-toggle="collapse"
                                data-target="#add-description"
                                aria-expanded="false"
                                aria-controls="add-description"
                            >
                                Thêm mô tả bài học
                            </div>
                            <div className="collapse" id="add-description">
                                <EditorLesson handleGetDataChild={handleGetDataChild} />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {activeBtn && (
                <button className="btn btn-success" onClick={handleCreateNewLesson}>
                    Thêm bài học
                </button>
            )}
        </Fragment>
    );
}

export default CreateLesson;
