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
                <div className="text-center">
                    <strong>{data.title}</strong>
                </div>
            </td>
            <td>
                <div className="text-center">
                    <a
                        className="text-dark"
                        href={`https://youtu.be/${data.urlVideo}`}
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
                <div className="text-center">
                    <strong>{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</strong>
                </div>
                <div className="text-center">
                    <strong>{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</strong>
                </div>
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
