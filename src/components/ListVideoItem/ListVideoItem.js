import moment from 'moment';

function ListVideoItem({ data }) {
    return (
        <tr>
            <td style={{ minWidth: 600 }}>
                <div className="text-center">{data.title}</div>
            </td>
            <td>
                <div className="text-center">
                    <a
                        className="text-dark"
                        href={`https://www.youtube.com/watch?v=${data.urlVideo}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>{data.urlVideo}</strong>
                    </a>
                </div>
            </td>

            <td>
                <div className="text-center">
                    {data.status ? (
                        <label className="badge badge-success">Bật</label>
                    ) : (
                        <label className="badge badge-danger">Tắt</label>
                    )}
                </div>
            </td>

            <td>
                <div className="text-center">{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</div>
                <div className="text-center">{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</div>
            </td>
            <td>
                <div className="text-center">
                    {data.status ? (
                        <span title="Bật trạng thái" className="btn btn-danger btn-sm mr-2">
                            Tắt
                        </span>
                    ) : (
                        <span title="Tắt trạng thái" className="btn btn-success btn-sm mr-2">
                            Bật
                        </span>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default ListVideoItem;
