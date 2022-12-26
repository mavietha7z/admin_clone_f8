import { Fragment, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '~/components/Title';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from '~/GlobalStyles.module.scss';
import NavMenu from '~/components/NavMenu';
import { createNewCourse } from '~/services/apiCourse';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/redux/createInstance';
import { loginSuccess } from '~/redux/reducer/authReducer';

const cx = classNames.bind(styles);

function CreateCourse() {
    const [inputCount, setInputCount] = useState(1);
    const [name, setName] = useState('');
    const [pathName, setPathName] = useState('');
    const [isWhatLearn, setIsWhatLearn] = useState([]);
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState(true);
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(null);

    const MySwal = withReactContent(Swal);
    const fileRef = useRef();
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const axiosJWT = createAxios(currentUser, dispatch, loginSuccess);

    const addInput = () => {
        if (inputCount < 10) {
            setInputCount(inputCount + 1);
        } else {
            MySwal.fire('Lỗi', 'Tối đa chỉ được 10 thẻ input', 'error');
        }
    };

    const removeInput = () => {
        setInputCount(inputCount - 1);
    };

    const handleCreateNewCourse = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const whatLearn = isWhatLearn.map((desc) => {
            return { description: desc };
        });
        const arrAsJson = JSON.stringify(whatLearn);

        formData.append('name', name);
        formData.append('pathName', pathName);
        formData.append('whatLearn', arrAsJson);
        formData.append('price', price);
        formData.append('status', status);
        formData.append('description', desc);
        formData.append('image', image);

        const result = await createNewCourse(formData, currentUser.accessToken, axiosJWT);

        if (result.errCode === 0) {
            MySwal.fire('Thành công', `${result.message}`, 'success').then((res) => {
                if (res.isConfirmed) {
                    window.location.reload();
                }
            });
        } else {
            MySwal.fire('Thất bại', `${result.message}`, 'error');
        }
    };

    const handlePrevImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setImage(file);
    };

    const handleChange = (e, i) => {
        const updatedWhatLearn = [...isWhatLearn];
        updatedWhatLearn[i] = e.target.value;
        setIsWhatLearn(updatedWhatLearn);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thêm khóa học" />

                    <NavMenu
                        nameHome="Tất cả"
                        pathHome="/course"
                        colorHome="warning"
                        namePlus="Thêm mới"
                        pathPlus="/course/create"
                        colorPlus="success"
                        float="float-right"
                    />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-12">
                            <div className="card-header" style={{ backgroundColor: '#f4f6f9' }}>
                                <h2 className="card-title mb-0">Thông tin khóa học</h2>
                            </div>
                        </div>

                        <div className="card-body row">
                            <div className="col-md-7 col-md-offset-3">
                                <div className="card">
                                    <form onSubmit={handleCreateNewCourse} encType="multipart/form-data">
                                        <div className="card-body row">
                                            <div className="form-group col-md-12">
                                                <label>Tên khóa học:</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Tên khóa học"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>Đường dẫn pathName:</label>
                                                <input
                                                    name="pathName"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Vd: javascript-nang-cao"
                                                    value={pathName}
                                                    onChange={(e) => setPathName(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label className=" w-100">
                                                    Học được gì sau khóa học:
                                                    <FontAwesomeIcon
                                                        className="btn btn-success float-right"
                                                        onClick={addInput}
                                                        icon={faCirclePlus}
                                                        title="Thêm 1 ô input mới"
                                                    />
                                                </label>
                                                <div>
                                                    {Array.from({ length: inputCount }, (_, i) => (
                                                        <Fragment key={i}>
                                                            <input
                                                                name="whatLearn"
                                                                type="text"
                                                                className="form-control mb-2 col-10"
                                                                placeholder="Mô tả những gì sẽ học được"
                                                                style={{ display: 'inline-block' }}
                                                                defaultValue={isWhatLearn[i]}
                                                                onChange={(e) => handleChange(e, i)}
                                                            />
                                                            {inputCount > 1 && (
                                                                <FontAwesomeIcon
                                                                    className={cx(
                                                                        'btn btn-danger float-right',
                                                                        'removeInput'
                                                                    )}
                                                                    onClick={removeInput}
                                                                    icon={faCircleMinus}
                                                                    title="Xóa ô input này"
                                                                />
                                                            )}
                                                        </Fragment>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label>Giá: ( Nếu để mặc định 0 thì sẽ là miễn phí )</label>
                                                <input
                                                    name="price"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Giá khóa học"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label>Ảnh nền:</label>
                                                {image?.preview && (
                                                    <img
                                                        className="ml-4 mb-4"
                                                        src={image.preview}
                                                        alt="Preview"
                                                        style={{
                                                            width: '160px',
                                                            height: 'auto',
                                                            borderRadius: 4,
                                                        }}
                                                    />
                                                )}
                                                <div style={{ marginLeft: 15 }}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-info"
                                                        onClick={() => fileRef.current.click()}
                                                    >
                                                        Chọn ảnh
                                                    </button>
                                                    <input
                                                        ref={fileRef}
                                                        onChange={handlePrevImage}
                                                        type="file"
                                                        name="image"
                                                        style={{ display: 'none' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label style={{ width: '100%' }}>Trạng thái:</label>
                                                <select
                                                    className="form-control col-4"
                                                    name="status"
                                                    value={status}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                >
                                                    <option value={true}>Bật</option>
                                                    <option value={false}>Tắt</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>Mô tả ngắn:</label>
                                                <textarea
                                                    name="description"
                                                    className="form-control"
                                                    rows={5}
                                                    placeholder="Mô tả ngắn khóa học"
                                                    value={desc}
                                                    onChange={(e) => setDesc(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-footer" style={{ borderTop: 0 }}>
                                            <button type="submit" className="btn btn-primary">
                                                Thêm
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
    );
}

export default CreateCourse;
