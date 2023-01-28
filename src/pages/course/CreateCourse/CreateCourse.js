import { Fragment, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '~/components/Title';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import NavMenu from '~/components/NavMenu';
import { createNewCourse } from '~/services/apiCourse';
import { useSelector } from 'react-redux';
import styles from '~/GlobalStyles.module.scss';
const cx = classNames.bind(styles);

function CreateCourse() {
    const [inputCount, setInputCount] = useState(1);

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [video, setVideo] = useState('');
    const [isWhatLearn, setIsWhatLearn] = useState([]);
    const [price, setPrice] = useState(0);
    const [priority, setPriority] = useState('');
    const [image, setImage] = useState(null);
    const [icon, setIcon] = useState(null);
    const [desc, setDesc] = useState('');

    const MySwal = withReactContent(Swal);
    const fileRef = useRef();
    const iconRef = useRef();

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const addInput = () => {
        if (inputCount < 100) {
            setInputCount(inputCount + 1);
        } else {
            MySwal.fire('Lỗi', 'Tối đa chỉ được 100 thẻ input', 'error');
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
        formData.append('slug', slug);
        formData.append('video', video);
        formData.append('whatLearn', arrAsJson);
        formData.append('price', price);
        formData.append('priority', priority);
        formData.append('image', image);
        formData.append('icon', icon);
        formData.append('description', desc);

        const result = await createNewCourse(formData, currentUser.accessToken);

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

    const handlePrevIcon = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setIcon(file);
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
                                    <form encType="multipart/form-data">
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
                                                <label>Đường dẫn slug:</label>
                                                <input
                                                    name="slug"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Vd: javascript-nang-cao"
                                                    value={slug}
                                                    onChange={(e) => setSlug(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label>Đường dẫn video giới thiệu:</label>
                                                <input
                                                    name="video"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Vd: fZMqdQhFqp8"
                                                    value={video}
                                                    onChange={(e) => setVideo(e.target.value)}
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
                                                <label>Sự ưu tiên:</label>
                                                <input
                                                    name="priority"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Thứ tự ưu tiên khóa học"
                                                    value={priority}
                                                    onChange={(e) => setPriority(e.target.value)}
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
                                                <label>Icon:</label>
                                                {icon?.preview && (
                                                    <img
                                                        className="ml-4 mb-4"
                                                        src={icon.preview}
                                                        alt="Preview"
                                                        style={{
                                                            width: '22px',
                                                            height: '22px',
                                                            borderRadius: 4,
                                                        }}
                                                    />
                                                )}
                                                <div style={{ marginLeft: 15 }}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-info"
                                                        onClick={() => iconRef.current.click()}
                                                    >
                                                        Chọn ảnh
                                                    </button>
                                                    <input
                                                        ref={iconRef}
                                                        onChange={handlePrevIcon}
                                                        type="file"
                                                        name="image"
                                                        style={{ display: 'none' }}
                                                    />
                                                </div>
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
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={handleCreateNewCourse}
                                            >
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
