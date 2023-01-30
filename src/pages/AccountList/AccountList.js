import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Title from '~/components/Title';
import { getUserByType } from '~/services/apiAuth';
import HeadingTable from '~/components/HeadingTable';
import ListItem from '~/components/ListItem';
import HeaderListUser from '~/components/HeaderListUser';

const MySwal = withReactContent(Swal);

function AccountList() {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

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
                    const result = await getUserByType(currentUser.accessToken, page);

                    if (result.statusCode === 0) {
                        setUsers(result.data);
                        setTotalPages(result.totalPages);
                    } else {
                        MySwal.fire('Lỗi', `${result.message || 'Lỗi lấy dữ liệu người dùng'}`, 'error');
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
        <div className="wrapper-global">
            <div className={'header-global'}>
                <div className="row">
                    <Title name="Người dùng" />
                </div>
            </div>

            <div className="content-global">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <HeaderListUser />

                            <div className="card-body" style={{ paddingTop: 10 }}>
                                <div className="row p-0">
                                    <div className="col-sm-12 table-responsive">
                                        <table className="table table-bordered table-striped dataTable">
                                            <HeadingTable
                                                headings={[
                                                    { title: 'Username' },
                                                    { title: 'Họ tên' },
                                                    { title: 'Email' },
                                                    { title: 'Vai trò' },
                                                    { title: 'Trạng thái' },
                                                    { title: 'Tick' },
                                                    { title: 'Ngày tạo / cập nhật' },
                                                    { title: 'Hành động' },
                                                ]}
                                            />

                                            <tbody>
                                                {users.map((user) => (
                                                    <ListItem key={user._id} type="account" data={user} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12 col-md-5"></div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="float-right" id="dynamic-table_paginate">
                                            <ul className="pagination" role="navigation">
                                                <li className="page-item disabled">
                                                    <span className="page-link">‹</span>
                                                </li>

                                                <li className="page-item">
                                                    <Link className="page-link" to="/users?page=1">
                                                        1
                                                    </Link>
                                                </li>

                                                <li className="page-item">
                                                    <Link className="page-link">›</Link>
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

export default AccountList;
