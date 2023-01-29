import moment from 'moment';
import { Link } from 'react-router-dom';

function SlideItem({ data }) {
    return (
        <tr>
            <td>
                <div className="text-center">
                    <strong>{data.title}</strong>
                </div>
            </td>
            <td>
                <div className="text-center">
                    <img
                        src={data.image}
                        alt={data.title}
                        style={{
                            width: '160px',
                            height: 'auto',
                            borderRadius: 4,
                        }}
                    />
                </div>
            </td>
            <td>
                <div className="text-center" style={{ maxWidth: 700 }}>
                    {data.description}
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
                    <Link>
                        <span className="btn btn-success btn-sm" data-toggle="modal" data-target=".bd-example-modal-xl">
                            <span className="text-white">Chi tiết</span>
                        </span>
                    </Link>
                    <span className="btn btn-danger btn-sm ml-2">
                        <span className="text-white">Xóa</span>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default SlideItem;
