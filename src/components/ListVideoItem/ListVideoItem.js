import moment from 'moment';

function ListVideoItem({ data, stt }) {
    const handleToggleStatus = () => {};

    return (
        <tr>
            <td>
                <div className="text-center">
                    <strong className="text-center">{stt + 1}</strong>
                </div>
            </td>
            <td style={{ minWidth: 500 }}>
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
                    <label className={`badge badge-${data.status ? 'success' : 'danger'}`}>
                        {data.status ? 'Bật' : 'Tắt'}
                    </label>
                </div>
            </td>
            <td>
                <div className="text-center">{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</div>
                <div className="text-center">{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</div>
            </td>
            <td>
                <div className="text-center">
                    <span
                        title={`${data.status ? 'Tắt' : 'Bật'} trạng thái`}
                        className={`btn btn-sm btn-${data.status ? 'danger' : 'success'}`}
                        onClick={handleToggleStatus}
                    >
                        {data.status ? 'Tắt' : 'Bật'}
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default ListVideoItem;
