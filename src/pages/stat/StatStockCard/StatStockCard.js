import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function StatStockCard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thống kê số tồn kho thẻ" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card table-responsive">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <div
                                    className="card-tools "
                                    style={{ float: 'left', position: 'relative', right: 0, left: 0 }}
                                >
                                    <div className="input-group input-group-sm dataTables_filter" style={{}}>
                                        <form action name="formSearch" method="GET">
                                            <div className="input-group">
                                                <select name="service_code" className="form-control" style={{}}>
                                                    <option value>Loại thẻ</option>
                                                    <option value="Viettel">Viettel</option>
                                                    <option value="Vina">Vina</option>
                                                    <option value="Mobi">Mobi</option>
                                                    <option value="Vnmobile">Vnmobile</option>
                                                    <option value="Gmobile">Gmobile</option>
                                                </select>
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-warning">
                                                        {/* <FaSearch /> */}
                                                        <span>Lọc</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row" style={{ padding: 0 }}>
                                    <div className="col-sm-12">
                                        <div className="table-responsive">
                                            <table
                                                id="example1"
                                                className="table table-bordered table-striped dataTable"
                                                style={{ borderCollapse: 'separate' }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th style={{ borderLeftWidth: 0 }}>ID</th>
                                                        <th style={{ borderLeftWidth: 0 }}>Sản phẩm</th>
                                                        <th style={{ borderLeftWidth: 0 }}>Mã dịch vụ</th>
                                                        <th style={{ borderLeftWidth: 0 }}>Mệnh giá</th>
                                                        <th style={{ borderLeftWidth: 0 }}>Số tồn</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>19</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vinaphone 10.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vina</td>
                                                        <td style={{ borderLeftWidth: 0 }}>10,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>20</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vinaphone 20.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vina</td>
                                                        <td style={{ borderLeftWidth: 0 }}>20,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>26</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vinaphone 30.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vina</td>
                                                        <td style={{ borderLeftWidth: 0 }}>30,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>27</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vinaphone 50.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vina</td>
                                                        <td style={{ borderLeftWidth: 0 }}>50,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>28</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vinaphone 100.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vina</td>
                                                        <td style={{ borderLeftWidth: 0 }}>100,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>29</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vinaphone 200.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vina</td>
                                                        <td style={{ borderLeftWidth: 0 }}>200,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>30</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vinaphone 300.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vina</td>
                                                        <td style={{ borderLeftWidth: 0 }}>300,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>31</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vinaphone 500.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Vina</td>
                                                        <td style={{ borderLeftWidth: 0 }}>500,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>32</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel 10.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel</td>
                                                        <td style={{ borderLeftWidth: 0 }}>10,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>33</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel 20.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel</td>
                                                        <td style={{ borderLeftWidth: 0 }}>20,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>34</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel 30.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel</td>
                                                        <td style={{ borderLeftWidth: 0 }}>30,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>35</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel 50.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel</td>
                                                        <td style={{ borderLeftWidth: 0 }}>50,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">5</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>36</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel 100.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel</td>
                                                        <td style={{ borderLeftWidth: 0 }}>100,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">1</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>37</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel 200.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel</td>
                                                        <td style={{ borderLeftWidth: 0 }}>200,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">1</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>38</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel 300.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel</td>
                                                        <td style={{ borderLeftWidth: 0 }}>300,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>39</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel 500.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel</td>
                                                        <td style={{ borderLeftWidth: 0 }}>500,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>40</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel 1.000.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Viettel</td>
                                                        <td style={{ borderLeftWidth: 0 }}>1,000,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>41</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobifone 10.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobi</td>
                                                        <td style={{ borderLeftWidth: 0 }}>10,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>42</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobifone 20.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobi</td>
                                                        <td style={{ borderLeftWidth: 0 }}>20,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>43</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobifone 30.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobi</td>
                                                        <td style={{ borderLeftWidth: 0 }}>30,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>44</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobifone 50.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobi</td>
                                                        <td style={{ borderLeftWidth: 0 }}>50,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>45</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobifone 100.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobi</td>
                                                        <td style={{ borderLeftWidth: 0 }}>100,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>46</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobifone 200.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobi</td>
                                                        <td style={{ borderLeftWidth: 0 }}>200,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>47</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobifone 300.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobi</td>
                                                        <td style={{ borderLeftWidth: 0 }}>300,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderLeftWidth: 0 }}>48</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobifone 500.000đ</td>
                                                        <td style={{ borderLeftWidth: 0 }}>Mobi</td>
                                                        <td style={{ borderLeftWidth: 0 }}>500,000</td>
                                                        <td style={{ borderLeftWidth: 0 }}>
                                                            <div className="text-danger">0</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="float-right" id="dynamic-table_paginate">
                                            <ul className="pagination" role="navigation">
                                                <li className="page-item disabled" aria-label="dafds">
                                                    <Link className="page-link" aria-hidden="true">
                                                        ‹
                                                    </Link>
                                                </li>
                                                <li className="page-item active" aria-current="page">
                                                    <Link className="page-link" style={{ marginLeft: 0 }}>
                                                        1
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/stockcard?page=2">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/stockcard?page=3">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/stockcard?page=4">
                                                        4
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/stockcard?page=5">
                                                        5
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/stockcard?page=6">
                                                        6
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/stockcard?page=7">
                                                        7
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/stockcard?page=8">
                                                        8
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="/statistic/stockcard?page=2"
                                                        rel="next"
                                                        aria-label="dasdsa"
                                                    >
                                                        ›
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
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

export default StatStockCard;
