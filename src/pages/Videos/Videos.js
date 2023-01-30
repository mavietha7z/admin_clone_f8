import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import TitleGlobal from '~/components/TitleGlobal';
import TableItem from '~/components/TableItem';
import HeadingTable from '~/components/HeadingTable';
import { getVideoByType } from '~/services/apiVideo';

const MySwal = withReactContent(Swal);

function Videos() {
    const [videos, setVideos] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const page = new URLSearchParams(location.search).get('page');

    useEffect(() => {
        if (!page) {
            navigate(`${location.pathname}?page=1`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        if (currentUser) {
            if (page) {
                const fetchApi = async () => {
                    const result = await getVideoByType(currentUser.accessToken, page);

                    if (result.data.statusCode === 0) {
                        setVideos(result.data.data);
                    } else {
                        MySwal.fire('Lỗi', `${result.data.message}`, 'error');
                    }
                };
                fetchApi();
            }
        } else {
            navigate('/login');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div className={'wrapper-global'}>
            <div className={'header'}>
                <div className="row">
                    <TitleGlobal name="Danh sách khóa học" />
                </div>
            </div>

            <div className="content-global">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className={'card-header bg-white'}>
                                <div className="col-md-6 float-right">
                                    <div className="float-right">
                                        <div className="input-group">
                                            <select className="form-control">
                                                <option value="order">Tiêu đề video</option>
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

                            <div className="card-body" style={{ padding: 20, paddingTop: 0 }}>
                                <div className="row table-responsive p-0">
                                    <div className="col-sm-12 pr-0">
                                        <table id="example1" className="table table-bordered table-striped dataTable">
                                            <HeadingTable
                                                headings={[
                                                    { title: 'Tiêu đề video' },
                                                    { title: 'Link youtube' },
                                                    { title: 'Trạng thái' },
                                                    { title: 'Ngày tạo / Cập nhật' },
                                                    { title: 'Hành động' },
                                                ]}
                                            />

                                            <tbody>
                                                {videos?.map((video) => (
                                                    <TableItem key={video._id} type="video" data={video} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Videos;
