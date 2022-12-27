import { Link } from 'react-router-dom';

function ListVideoItem() {
    return (
        <tr>
            <td style={{ minWidth: 600 }}>
                <div className="text-center">Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?</div>
            </td>
            <td>
                <div className="text-center">
                    <strong>Link youtube</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <label className="badge badge-success">Bật</label>
                    {/* {data.status ? (
                    ) : (
                        <label className="badge badge-danger">Tắt</label>
                    )} */}
                </div>
            </td>

            <td>
                {/* <div className="text-center">{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</div> */}
                {/* <div className="text-center">{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</div> */}
                <div className="text-center">27/12/2022 - 02:19</div>
            </td>
            <td>
                <div className="text-center">
                    {/* {data.status ? (
                        <span
                            title="Bật trạng thái"
                            className="btn btn-danger btn-sm mr-2"
                            onClick={() => handleToggleStatusBlog(false)}
                        >
                            Tắt
                        </span>
                    ) : (
                        <span
                            title="Tắt trạng thái"
                            className="btn btn-success btn-sm mr-2"
                            onClick={() => handleToggleStatusBlog(true)}
                        >
                            Bật
                        </span>
                    )} */}

                    <span
                        title="Tắt trạng thái"
                        className="btn btn-success btn-sm mr-2"
                        // onClick={() => handleToggleStatusBlog(true)}
                    >
                        Bật
                    </span>

                    <span className="btn btn-success btn-sm" title="Xem chi tiết">
                        <Link to={`/course/detail/`}>
                            <span className="text-white">Chi tiết</span>
                        </Link>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default ListVideoItem;
