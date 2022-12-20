import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ConnectStock() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Quản lý key kết nối kho thẻ" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title d-inline-block">Danh sách sản phẩm</h2>
                                <div className="card-tools " style={{ float: 'right', position: 'relative' }}>
                                    <div className="input-group input-group-sm dataTables_filter">
                                        <form name="formSearch" method="GET">
                                            <div className="input-group">
                                                <select name="product" className="form-control">
                                                    <option value="all">Tất cả sản phẩm</option>
                                                    <option value={23}>Thẻ Viettel</option>
                                                    <option value={24}>Thẻ Vinaphone</option>
                                                    <option value={25}>Thẻ Mobifone</option>
                                                    <option value={26}>Thẻ Vietnamobile</option>
                                                    <option value={27}>Thẻ Gmobile</option>
                                                    <option value={28}>Thẻ Garena</option>
                                                    <option value={29}>Thẻ Appota</option>
                                                    <option value={30}>Thẻ Zing</option>
                                                    <option value={31}>Thẻ Vcoin</option>
                                                    <option value={32}>Thẻ Gate</option>
                                                    <option value={37}>Thẻ Cà Rốt</option>
                                                    <option value={38}>Thẻ Funcard</option>
                                                    <option value={40}>Thẻ Steam</option>
                                                    <option value={41}>Thẻ Scoin</option>
                                                    <option value={42}>Thẻ Gosu</option>
                                                    <option value={43}>Thẻ Sohacoin</option>
                                                    <option value={44}>Thẻ Oncash</option>
                                                    <option value={45}>Thẻ BIT</option>
                                                    <option value={46}>Thẻ KUL</option>
                                                    <option value={47}>Thẻ Vega</option>
                                                </select>
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-warning">
                                                        {/* <FaSearch /> */}
                                                        <span>Tìm kiếm</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{ padding: '20px 16px 0 16px' }}>
                                <form method="POST">
                                    <div className="table-responsive card-body row p-0 m-0">
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th style={{ borderTopWidth: 0 }}>#</th>
                                                    <th style={{ borderTopWidth: 0 }}>Name</th>
                                                    <th style={{ borderTopWidth: 0 }}>Netpay</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>19</td>
                                                    <td>Vinaphone 10.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vina"
                                                            data-value={10000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vina"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>Vinaphone 20.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vina"
                                                            data-value={20000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vina"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>26</td>
                                                    <td>Vinaphone 30.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vina"
                                                            data-value={30000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vina"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>27</td>
                                                    <td>Vinaphone 50.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vina"
                                                            data-value={50000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vina"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>28</td>
                                                    <td>Vinaphone 100.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vina"
                                                            data-value={100000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vina"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>29</td>
                                                    <td>Vinaphone 200.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vina"
                                                            data-value={200000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vina"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>30</td>
                                                    <td>Vinaphone 300.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vina"
                                                            data-value={300000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vina"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>31</td>
                                                    <td>Vinaphone 500.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vina"
                                                            data-value={500000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vina"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>32</td>
                                                    <td>Viettel 10.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Viettel"
                                                            data-value={10000}
                                                            data-provider="Netpay"
                                                            defaultValue="Viettel"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>33</td>
                                                    <td>Viettel 20.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Viettel"
                                                            data-value={20000}
                                                            data-provider="Netpay"
                                                            defaultValue="Viettel"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>34</td>
                                                    <td>Viettel 30.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Viettel"
                                                            data-value={30000}
                                                            data-provider="Netpay"
                                                            defaultValue="Viettel"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>35</td>
                                                    <td>Viettel 50.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Viettel"
                                                            data-value={50000}
                                                            data-provider="Netpay"
                                                            defaultValue="Viettel"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>36</td>
                                                    <td>Viettel 100.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Viettel"
                                                            data-value={100000}
                                                            data-provider="Netpay"
                                                            defaultValue="Viettel"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>37</td>
                                                    <td>Viettel 200.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Viettel"
                                                            data-value={200000}
                                                            data-provider="Netpay"
                                                            defaultValue="Viettel"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>38</td>
                                                    <td>Viettel 300.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Viettel"
                                                            data-value={300000}
                                                            data-provider="Netpay"
                                                            defaultValue="Viettel"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>39</td>
                                                    <td>Viettel 500.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Viettel"
                                                            data-value={500000}
                                                            data-provider="Netpay"
                                                            defaultValue="Viettel"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>40</td>
                                                    <td>Viettel 1.000.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Viettel"
                                                            data-value={1000000}
                                                            data-provider="Netpay"
                                                            defaultValue="Viettel"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>41</td>
                                                    <td>Mobifone 10.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Mobi"
                                                            data-value={10000}
                                                            data-provider="Netpay"
                                                            defaultValue="Mobi"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>42</td>
                                                    <td>Mobifone 20.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Mobi"
                                                            data-value={20000}
                                                            data-provider="Netpay"
                                                            defaultValue="Mobi"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>43</td>
                                                    <td>Mobifone 30.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Mobi"
                                                            data-value={30000}
                                                            data-provider="Netpay"
                                                            defaultValue="Mobi"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>44</td>
                                                    <td>Mobifone 50.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Mobi"
                                                            data-value={50000}
                                                            data-provider="Netpay"
                                                            defaultValue="Mobi"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>45</td>
                                                    <td>Mobifone 100.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Mobi"
                                                            data-value={100000}
                                                            data-provider="Netpay"
                                                            defaultValue="Mobi"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>46</td>
                                                    <td>Mobifone 200.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Mobi"
                                                            data-value={200000}
                                                            data-provider="Netpay"
                                                            defaultValue="Mobi"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>47</td>
                                                    <td>Mobifone 300.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Mobi"
                                                            data-value={300000}
                                                            data-provider="Netpay"
                                                            defaultValue="Mobi"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>48</td>
                                                    <td>Mobifone 500.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Mobi"
                                                            data-value={500000}
                                                            data-provider="Netpay"
                                                            defaultValue="Mobi"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>49</td>
                                                    <td>Vietnamobile 10.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vnmobile"
                                                            data-value={10000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vnmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>50</td>
                                                    <td>Vietnamobile 20.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vnmobile"
                                                            data-value={20000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vnmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>51</td>
                                                    <td>Vietnamobile 30.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vnmobile"
                                                            data-value={30000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vnmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>52</td>
                                                    <td>Vietnamobile 50.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vnmobile"
                                                            data-value={50000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vnmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>53</td>
                                                    <td>Vietnamobile 100.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vnmobile"
                                                            data-value={100000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vnmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>54</td>
                                                    <td>Vietnamobile 200.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vnmobile"
                                                            data-value={200000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vnmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>55</td>
                                                    <td>Vietnamobile 300.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vnmobile"
                                                            data-value={300000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vnmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>56</td>
                                                    <td>Vietnamobile 500.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Vnmobile"
                                                            data-value={500000}
                                                            data-provider="Netpay"
                                                            defaultValue="Vnmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>57</td>
                                                    <td>Gmobile 10.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Gmobile"
                                                            data-value={10000}
                                                            data-provider="Netpay"
                                                            defaultValue="Gmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>58</td>
                                                    <td>Gmobile 20.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Gmobile"
                                                            data-value={20000}
                                                            data-provider="Netpay"
                                                            defaultValue="Gmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>59</td>
                                                    <td>Gmobile 30.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Gmobile"
                                                            data-value={30000}
                                                            data-provider="Netpay"
                                                            defaultValue="Gmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>60</td>
                                                    <td>Gmobile 50.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Gmobile"
                                                            data-value={50000}
                                                            data-provider="Netpay"
                                                            defaultValue="Gmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>61</td>
                                                    <td>Gmobile 100.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Gmobile"
                                                            data-value={100000}
                                                            data-provider="Netpay"
                                                            defaultValue="Gmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>62</td>
                                                    <td>Gmobile 200.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Gmobile"
                                                            data-value={200000}
                                                            data-provider="Netpay"
                                                            defaultValue="Gmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>63</td>
                                                    <td>Gmobile 300.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Gmobile"
                                                            data-value={300000}
                                                            data-provider="Netpay"
                                                            defaultValue="Gmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>64</td>
                                                    <td>Gmobile 500.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Gmobile"
                                                            data-value={500000}
                                                            data-provider="Netpay"
                                                            defaultValue="Gmobile"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>65</td>
                                                    <td>Garena 10.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Garena"
                                                            data-value={10000}
                                                            data-provider="Netpay"
                                                            defaultValue="Garena"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>66</td>
                                                    <td>Garena 20.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Garena"
                                                            data-value={20000}
                                                            data-provider="Netpay"
                                                            defaultValue="Garena"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>67</td>
                                                    <td>Garena 30.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Garena"
                                                            data-value={30000}
                                                            data-provider="Netpay"
                                                            defaultValue="Garena"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>68</td>
                                                    <td>Garena 50.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Garena"
                                                            data-value={50000}
                                                            data-provider="Netpay"
                                                            defaultValue="Garena"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>69</td>
                                                    <td>Garena 100.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Garena"
                                                            data-value={100000}
                                                            data-provider="Netpay"
                                                            defaultValue="Garena"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>70</td>
                                                    <td>Garena 200.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Garena"
                                                            data-value={200000}
                                                            data-provider="Netpay"
                                                            defaultValue="Garena"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>71</td>
                                                    <td>Garena 300.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Garena"
                                                            data-value={300000}
                                                            data-provider="Netpay"
                                                            defaultValue="Garena"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>72</td>
                                                    <td>Garena 500.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Garena"
                                                            data-value={500000}
                                                            data-provider="Netpay"
                                                            defaultValue="Garena"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>73</td>
                                                    <td>Appota 10.000đ</td>
                                                    <td>
                                                        <input
                                                            type="key"
                                                            className="form-control"
                                                            data-sku="Appota"
                                                            data-value={10000}
                                                            data-provider="Netpay"
                                                            defaultValue="Appota"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <input
                                        type="hidden"
                                        name="_token"
                                        defaultValue="DiYfatRBWbDZIg9ILI8UrEi4OQ2CXIFZ4hxP2bXo"
                                    />
                                </form>
                                <ul className="pagination" role="navigation">
                                    <li className="page-item disabled" aria-label="dafds">
                                        <Link className="page-link" aria-hidden="true">
                                            ‹
                                        </Link>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                        <Link className="page-link">1</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="/stockcards/connection?page=2">
                                            2
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="/stockcards/connection?page=3">
                                            3
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="/stockcards/connection?page=4">
                                            4
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link
                                            className="page-link"
                                            to="/stockcards/connection?page=2"
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
    );
}

export default ConnectStock;
