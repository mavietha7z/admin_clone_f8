import React from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import styles from '~/GlobalStyles.module.scss';
import { Link } from 'react-router-dom';
import { Buffer } from 'buffer';

const cx = classNames.bind(styles);

function ListBlogItem({ data }) {
    console.log('data: ', data);
    // const imageData = Buffer.from(data?.image?.data).toString('base64');
    // const imageUrl = `data:image/png;base64,${imageData}`;

    return (
        <tr>
            <td style={{ width: 300 }}>
                <div className="text-center">{data.name}</div>
            </td>
            <td style={{ width: 500 }}>
                <div className="text-center">
                    <img
                        src="https://files.fullstack.edu.vn/f8-prod/blog_posts/5582/6389be2bf185e.png"
                        alt={data.name}
                        style={{
                            width: '200px',
                            maxHeight: '126px',
                            borderRadius: 4,
                        }}
                    />
                </div>
            </td>
            <td>
                <div className="text-center">Mã Việt Hà</div>
            </td>
            <td>
                <div className="text-center">JavaScript</div>
            </td>
            <td>
                <div className="text-center">
                    <div>
                        <label className="badge badge-success">Bật</label>
                    </div>
                    <button className="btn btn-danger btn-sm mt-3">Tắt</button>
                </div>
            </td>

            <td>
                <div className="text-center">23/12/2022 - 03:04</div>
            </td>
            <td>
                <div className="text-center">
                    <span className={cx('btn btn-success btn-sm', 'btn-action')}>
                        <Link to={`/course/detail/${data._id}`}>
                            <span className="text-white">Chi tiết</span>
                        </Link>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default ListBlogItem;
