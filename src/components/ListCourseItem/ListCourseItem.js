import React from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import styles from '~/GlobalStyles.module.scss';
import { Link } from 'react-router-dom';
import { Buffer } from 'buffer';

const cx = classNames.bind(styles);

function ListCourseItem({ data }) {
    const imageData = Buffer.from(data?.image?.data).toString('base64');
    const imageUrl = `data:image/png;base64,${imageData}`;

    return (
        <tr>
            <td>
                <div className="text-center">{data.name}</div>
            </td>
            <td>
                <div className="text-center">
                    <img
                        src={imageUrl}
                        alt={data.name}
                        style={{
                            width: '160px',
                            height: 'auto',
                            borderRadius: 4,
                        }}
                    />
                </div>
            </td>
            <td>
                <div className="text-center">
                    <div>{data.chapter.length}</div>
                    <button className="btn btn-success btn-sm mt-3">Thêm chương</button>
                </div>
            </td>
            <td>
                <div className="text-center">0</div>
            </td>
            <td>
                <div className="text-center">03 giờ 26 phút</div>
            </td>
            <td>
                <div className="text-center">{data.price === 0 ? 'Miễn phí' : 'Pro'}</div>
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
            </td>
            <td>
                <div className="text-center">
                    <span
                        className={cx('btn btn-success edit-softcard-btn btn-sm', 'btn-action')}
                        data-toggle="modal"
                        data-target="#total-order"
                    >
                        <Link to={`/course/detail/${data._id}`}>
                            <span className="text-white">Chi tiết</span>
                        </Link>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default ListCourseItem;
