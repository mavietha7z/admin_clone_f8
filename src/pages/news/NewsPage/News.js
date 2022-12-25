// import classNames from 'classnames/bind';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Image } from '~/assets/image';
// import Title from '~/components/Title';
// import styles from '~/GlobalStyles.module.scss';

// const cx = classNames.bind(styles);

// function News() {
//     const [status, setStatus] = useState(false);

//     const handleToggleStatus = () => {
//         setStatus(!status);
//     };

//     return (
//         <div className={cx('wrapper')}>
//             <div className={cx('header')}>
//                 <div className="row">
//                     <Title name="News" />
//                 </div>
//             </div>
//             <div className={cx('content')}>
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card">
//                             <div className="card-header" style={{ borderBottom: 0 }}>
//                                 <h2 className="card-title">Danh sách tin</h2>
//                                 <div className="float-right" style={{ marginRight: 350 }}>
//                                     <Link to="/news_cat">
//                                         <button className="btn btn-info">
//                                             {/* <FaPlusCircle /> */}
//                                             <span>Danh mục</span>
//                                         </button>
//                                     </Link>
//                                     <Link to="/news/create">
//                                         <button className="btn btn-success">
//                                             {/* <FaPlusCircle /> */}
//                                             <span>Thêm mới</span>
//                                         </button>
//                                     </Link>
//                                 </div>
//                                 <div
//                                     className="card-tools"
//                                     style={{ position: 'absolute', top: '1rem', right: '1rem' }}
//                                 >
//                                     <div
//                                         className="input-group input-group-sm dataTables_filter"
//                                         style={{ width: 350 }}
//                                     >
//                                         <form action name="formSearch" method="GET">
//                                             <div className="input-group">
//                                                 <select name="type" className="form-control">
//                                                     <option value>Search Type</option>
//                                                     <option value="title">Theo tên</option>
//                                                     <option value="author">Theo tác giả</option>
//                                                     <option value="language">Theo ngôn ngữ</option>
//                                                     <option value="status">
//                                                         By Status (0 is Inactive/1 is Active)
//                                                     </option>
//                                                 </select>
//                                                 <input
//                                                     type="text"
//                                                     name="keyword"
//                                                     className="form-control"
//                                                     placeholder="Search"
//                                                     defaultValue=""
//                                                 />
//                                                 <div className="input-group-append">
//                                                     <button type="submit" className="btn btn-default">
//                                                         {/* <FaSearch /> */}
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>

//                             <form action="/news" method="POST">
//                                 <input
//                                     type="hidden"
//                                     name="_token"
//                                     defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
//                                 />
//                                 <div className="card-body" style={{ paddingTop: 0 }}>
//                                     <div className="row p-0">
//                                         <div className="col-sm-12">
//                                             <table
//                                                 id="example1"
//                                                 className="table table-bordered table-striped dataTable"
//                                             >
//                                                 <thead>
//                                                     <tr>
//                                                         <th className="center sorting_disabled" rowSpan={1} colSpan={1}>
//                                                             <label className="pos-rel">
//                                                                 <input type="checkbox" className="ace" id="checkall" />
//                                                                 <span className="lbl" />
//                                                             </label>
//                                                         </th>
//                                                         <th>ID</th>
//                                                         <th>Hình ảnh</th>
//                                                         <th>Tiêu đề</th>
//                                                         <th>Tác giả</th>
//                                                         <th>Ngôn ngữ</th>
//                                                         <th>Trạng thái</th>
//                                                         <th>Lượt xem</th>
//                                                         <th>Ngày tạo</th>
//                                                         <th>Hành động</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     <tr>
//                                                         <td className="center">
//                                                             <label className="pos-rel">
//                                                                 <input
//                                                                     type="checkbox"
//                                                                     className="ace mycheckbox"
//                                                                     defaultValue={7}
//                                                                     name="check[]"
//                                                                 />
//                                                                 <span className="lbl" />
//                                                             </label>
//                                                         </td>
//                                                         <td>7</td>
//                                                         <td>
//                                                             <img src={Image.gif} alt="" width={80} height={70} />
//                                                         </td>
//                                                         <td>
//                                                             <Link
//                                                                 to="/news/huong-dan-rut-tien-ve-ngan-hang-vi-dien-tu-cua-thenhanhvn.html"
//                                                                 target="_blank"
//                                                             >
//                                                                 HD RÚT TIỀN VỀ NGÂN HÀNG/VÍ ĐIỆN TỬ CỦA THENHANH.VN
//                                                             </Link>
//                                                         </td>
//                                                         <td>Admin</td>
//                                                         <td>vi</td>
//                                                         <td>
//                                                             <div
//                                                                 data-table="softcard_products"
//                                                                 data-id={47}
//                                                                 data-col="status"
//                                                                 className={
//                                                                     status
//                                                                         ? cx('switch', 'round', 'on')
//                                                                         : cx('switch', 'round', 'off')
//                                                                 }
//                                                                 style={{ verticalAlign: 'top', marginLeft: 10 }}
//                                                                 onClick={() => handleToggleStatus()}
//                                                             >
//                                                                 <div className={cx('toggle')} />
//                                                             </div>
//                                                         </td>
//                                                         <td>534691</td>
//                                                         <td>2022-02-14 12:52:21</td>
//                                                         <td>
//                                                             <div className="action-buttons">
//                                                                 <Link to="/news/7/edit">
//                                                                     <span className="btn btn-warning btn-sm mr-2">
//                                                                         {/* <FaPen /> */}
//                                                                     </span>
//                                                                 </Link>
//                                                                 <Link
//                                                                     to="#"
//                                                                     name="HD RÚT TIỀN VỀ NGÂN HÀNG/VÍ ĐIỆN TỬ CỦA THENHANH.VN"
//                                                                     link="/news/7"
//                                                                     className="deleteClick red id-btn-dialog2"
//                                                                     data-toggle="modal"
//                                                                     data-target="#deleteModal"
//                                                                 >
//                                                                     <span className="btn btn-danger btn-sm">
//                                                                         {/* <FaTrashAlt /> */}
//                                                                     </span>
//                                                                 </Link>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-sm-12 col-md-5">
//                                             <div
//                                                 className="dataTables_info"
//                                                 id="example2_info"
//                                                 role="status"
//                                                 aria-live="polite"
//                                             >
//                                                 <div className="form-group row">
//                                                     <div className="col-md-4 pl-0">
//                                                         <select name="action" className="form-control">
//                                                             <option value="delete">Xóa đã chọn</option>
//                                                         </select>
//                                                     </div>
//                                                     <div className="col-md-6 pl-0">
//                                                         <button type="submit" className="btn btn-warning">
//                                                             {/* <FaCheckCircle /> */}
//                                                             <span>Thực hiện</span>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-sm-12 col-md-7">
//                                             <div className="float-right" id="dynamic-table_paginate"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal delete */}
//             <div
//                 className="modal fade"
//                 id="deleteModal"
//                 tabIndex={-1}
//                 role="dialog"
//                 aria-labelledby="exampleModalLabel"
//                 aria-hidden="true"
//             >
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <form id="deleteForm" action method="POST">
//                             <div className="modal-header">
//                                 <h2 className="modal-title" id="exampleModalLabel">
//                                     Delete News
//                                 </h2>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">×</span>
//                                 </button>
//                             </div>
//                             <div id="deleteMes" className="modal-body">
//                                 Delete : HD RÚT TIỀN VỀ NGÂN HÀNG/VÍ ĐIỆN TỬ CỦA THENHANH.VN ?
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">
//                                     Close
//                                 </button>
//                                 <button type="submit" className="btn btn-primary">
//                                     Submit
//                                 </button>
//                             </div>
//                             <input type="hidden" name="_method" defaultValue="delete" />
//                             <input
//                                 type="hidden"
//                                 name="_token"
//                                 defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
//                             />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default News;
