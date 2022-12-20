import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditStock() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Cập nhật cấu hình kho thẻ" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title d-inline-block">Thông tin kết nối</h2>
                                <div className="float-right">
                                    <Link to="/web/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle style={{ marginBottom: 2 }} /> */}
                                            <span>Kho liên kết</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <form
                                            method="POST"
                                            action="/stockcards/setting/33/update"
                                            acceptCharset="UTF-8"
                                        >
                                            <input name="_method" type="hidden" defaultValue="PATCH" />
                                            <input
                                                name="_token"
                                                type="hidden"
                                                defaultValue="DiYfatRBWbDZIg9ILI8UrEi4OQ2CXIFZ4hxP2bXo"
                                            />
                                            <div className="card-body row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Tên nhà cung cấp:</label>
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="Tên nhà cung cấp"
                                                            defaultValue="Kho thẻ Netpay"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="provider">Provider:</label>
                                                        <input
                                                            name="provider"
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="provider"
                                                            defaultValue="Netpay"
                                                            readOnly="readonly"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="post_url">post_url:</label>
                                                        <input
                                                            name="configs[post_url]"
                                                            type="text"
                                                            className="form-control"
                                                            id="post_url"
                                                            defaultValue="https://apiv2.netpay.vn/api/cardws"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="partner_id">partner_id:</label>
                                                        <input
                                                            name="configs[partner_id]"
                                                            type="text"
                                                            className="form-control"
                                                            id="partner_id"
                                                            defaultValue={9917184461}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="partner_key">partner_key:</label>
                                                        <input
                                                            name="configs[partner_key]"
                                                            type="text"
                                                            className="form-control"
                                                            id="partner_key"
                                                            defaultValue="4ace5467168e2491a7c756f89c315476"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="private_key">Private Key:</label>
                                                        <textarea
                                                            name="private_key"
                                                            type="text"
                                                            className="form-control"
                                                            id="private_key"
                                                            defaultValue={
                                                                '-----BEGIN PRIVATE KEY-----\nMIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAODPhuUyKq6s/kOA\n4tXpOuRVnEcG58jhmrl8vUUE5ibLm5wFHjLC1Q7rf856tSvRdrUIsywYGNbdQ7ye\njoldo7MDYpQCM08KUXLsj7UhnHOsQQA/DpvVxJ48lxJusjy+3faZCO49jvBg+fO5\nY5zbqODrrrBjQ1S7XWZbgn15XdFnAgMBAAECgYEAxZPeXITwmkAT30PhGFs4lQDg\nrlPVVelhUG/e8E/T7ni3tDGTTs2I7unuk4uounAHQif5QGGVQxGHvLglUXjoqoA5\nZPbWWaLXWfUW1J8WjVMjjCWpNaDOBK9GPH4BZvq+kJxrTT3Ut2Wz2hMP1KCL1yQK\nimQD2mI38fCsUxW8kQECQQDw5FFf/BEyovxp5gZHg1qDc/rS4a7jE3FHTiANjqKb\n8H0LWnDXx8+1cYJ9COUYTpTQJbQxbigOS9NFJFMepp1BAkEA7ukDpxTLOEs2JEqm\nXzw3uMjB7i7QMP+AJ8DztjWLhZ4WmDKqMa/0+AloZVWAUcqIoDCkcmlh4Kj7yl0w\nT1I8pwJBAMFqwX/tN63NuhgZbp9K84kqvZFHThHbkY/sRcY86YmF7hEInCRVtgv8\nyQY19ySuK8R5EZbC2Pypm0gf43Fv3EECQHq6FHhGBEb8y+lEt8aAZpdz+btjLOue\ntLS3N/rH8s5G8ZBppmgz3YF1Q72aeHqLsjeoBTII1JDV/dJsoJ5+vk0CQQC1KqRq\nF+h0cUISYzwVp2EukVqCbVIXeqtyjmyCOiBssHwCSKCoTUqetxhVz6LA4h0nxKDG\npzqrhiSHXxQpYxVa\n-----END PRIVATE KEY-----'
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="status">Status:</label>
                                                        <input
                                                            name="status"
                                                            id="status"
                                                            type="checkbox"
                                                            defaultValue="status"
                                                            data-toggle="toggle"
                                                            style={{ display: 'none' }}
                                                            defaultChecked="checked"
                                                        />
                                                        <div
                                                            className="Switch Round On"
                                                            style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                        >
                                                            <div className="Toggle" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
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

export default EditStock;
