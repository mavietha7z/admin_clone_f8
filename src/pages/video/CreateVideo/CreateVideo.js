import { useState } from 'react';
import TitleGlobal from '~/components/TitleGlobal';
import { createNewVideo, handleGetInfoVideo } from '~/services/apiVideo';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreateVideo() {
    const [dataVideo, setDataVideo] = useState([]);

    const [image, setImage] = useState('');
    const [uidVideo, setUidVideo] = useState('');
    const [titleVideo, setTitleVideo] = useState('');
    const [timeVideo, setTimeVideo] = useState('');
    const [viewVideo, setViewVideo] = useState('');
    const [likeVideo, setLikeVideo] = useState('');
    const [cmtVideo, setCmtVideo] = useState('');

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

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

    const handleGetVideo = async () => {
        if (uidVideo !== '') {
            const result = await handleGetInfoVideo(uidVideo);

            if (result.errCode === 200 && result.data.length > 0) {
                MySwal.fire('Thành công', 'Lấy dữ liệu video thành công', 'success');

                result.data.map((item) => {
                    setImage(item.snippet.thumbnails.maxres.url);
                    setTimeVideo(item.contentDetails.duration);
                    setTitleVideo(item.snippet.title);
                    setViewVideo(item.statistics.viewCount);
                    setLikeVideo(item.statistics.likeCount);
                    setCmtVideo(item.statistics.commentCount);

                    return item;
                });

                setDataVideo(result.data);
            } else if (result.errCode === 1) {
                MySwal.fire('Lỗi', result.message, 'error');
            } else {
                MySwal.fire('Lỗi', 'Lấy video thất bại', 'error');
            }
        } else {
            MySwal.fire('Lỗi', 'UID video không được để trống', 'error');
        }
    };

    const handleCreateNewVideo = async () => {
        if (dataVideo.length > 0) {
            const newVideo = {
                title: titleVideo,
                image: image,
                urlVideo: uidVideo,
                timeVideo: iso8601ToTimeString(timeVideo),
                view: viewVideo,
                like: likeVideo,
                comment: cmtVideo,
            };
            const result = await createNewVideo(newVideo, currentUser.accessToken);

            if (result.errCode === 0) {
                (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed && navigate('/video');
            } else {
                MySwal.fire('Lỗi', 'Thêm video thất bại', 'error');
            }
        } else {
            MySwal.fire('Lỗi', 'Thông tin video không được để trống', 'error');
        }
    };

    return (
        <div className={'wrapper-global'}>
            <div className={'header-global'}>
                <div className="row">
                    <TitleGlobal name="Thêm video" />
                </div>
            </div>

            <div className="content-global">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: '#f4f6f9' }}>
                                <h2 className="card-title mb-0">Thông tin video</h2>
                            </div>

                            <div className="card-body row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>UID Video:</label>
                                        <input
                                            name="pathName"
                                            type="text"
                                            className="form-control"
                                            placeholder="Vd: YH-E4Y3EaT4"
                                            value={uidVideo}
                                            onChange={(e) => setUidVideo(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group mt-5">
                                        <button className="btn btn-success" onClick={handleGetVideo}>
                                            Lấy thông tin video
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Tiêu đề video</label>
                                        <input
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            value={titleVideo}
                                            disabled
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label>Thời gian</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    value={iso8601ToTimeString(timeVideo)}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label>Lượt xem</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    value={viewVideo}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label>Lượt thích</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    value={likeVideo}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label>Bình luận</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    value={cmtVideo}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Thumb nails</label>
                                        <div className="mt-4">
                                            {image && <img src={image} alt="Thumb nails" style={{ width: 550 }} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer" style={{ borderTop: 0 }}>
                                <button type="submit" className="btn btn-primary" onClick={handleCreateNewVideo}>
                                    Thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateVideo;
