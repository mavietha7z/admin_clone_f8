import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Fragment, useRef, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import Title from '~/components/Title';
import FileControl from '~/components/FileControl';
import { createCourse } from '~/services/apiCourse';
import InputControl from '~/components/InputControl';

const MySwal = withReactContent(Swal);

function CreateCourse() {
    const [inputCount, setInputCount] = useState(1);

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [video, setVideo] = useState('');
    const [priority, setPriority] = useState(0);
    const [price, setPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [preOrderPrice, setPreOrderPrice] = useState(0);
    const [isWhatLearn, setIsWhatLearn] = useState([]);
    const [image, setImage] = useState(null);
    const [icon, setIcon] = useState(null);
    const [desc, setDesc] = useState('');

    const fileRef = useRef();
    const iconRef = useRef();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleCreateCourse = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        const whatLearn = isWhatLearn.map((desc) => {
            return { description: desc };
        });
        const arrAsJson = JSON.stringify(whatLearn);

        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('video', video);
        formData.append('priority', priority);
        formData.append('price', price);
        formData.append('oldPrice', oldPrice);
        formData.append('preOrderPrice', preOrderPrice);
        formData.append('whatLearn', arrAsJson);
        formData.append('image', image);
        formData.append('icon', icon);
        formData.append('description', desc);

        const result = await createCourse(formData, currentUser.accessToken);

        if (result.statusCode === 0) {
            MySwal.fire('Thành công', `${result.message}`, 'success').then((res) => {
                if (res.isConfirmed) {
                    navigate('/course');
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

    const handleChangeWhatLearn = (e, i) => {
        const updatedWhatLearn = [...isWhatLearn];
        updatedWhatLearn[i] = e.target.value;
        setIsWhatLearn(updatedWhatLearn);
    };

    return (
        <div className={'wrapper-global'}>
            <div className={'header-global'}>
                <div className="row">
                    <Title name="Thêm khóa học" />
                </div>
            </div>

            <div className="content-global">
                <div className="row">
                    <div className="col-12">
                        <div className="col-12">
                            <div className="card-header" style={{ backgroundColor: '#f4f6f9' }}>
                                <h2 className="card-title mb-0">Thông tin khóa học</h2>
                            </div>
                        </div>

                        <form encType="multipart/form-data">
                            <div className="card-body row">
                                <div className="col-md-5">
                                    <div className="card row">
                                        <InputControl
                                            type="title"
                                            name="title"
                                            label="Tên khóa học:"
                                            placeholder="Nhập tên khóa học"
                                            value={title}
                                            setValue={setTitle}
                                        />

                                        <InputControl
                                            type="slug"
                                            name="slug"
                                            label="Đường dẫn slug:"
                                            placeholder="javascript-co-ban"
                                            value={slug}
                                            setValue={setSlug}
                                        />

                                        <InputControl
                                            type="video"
                                            name="video"
                                            label="Url video giới thiệu:"
                                            placeholder="fZMqdQhFqp8"
                                            value={video}
                                            setValue={setVideo}
                                        />

                                        <InputControl
                                            type="priority"
                                            name="priority"
                                            label="Sự ưu tiên: ( Mặc định sẽ là 0 )"
                                            placeholder="Thứ tự ưu tiên khóa học"
                                            value={priority}
                                            setValue={setPriority}
                                        />

                                        <InputControl
                                            type="price"
                                            name="price"
                                            label="Giá: ( Nếu để mặc định 0 thì sẽ là miễn phí )"
                                            placeholder="Giá khóa học"
                                            value={price}
                                            setValue={setPrice}
                                        />

                                        <InputControl
                                            type="oldPrice"
                                            name="oldPrice"
                                            label="Giá cũ: ( Nếu là khóa pro )"
                                            placeholder="Giá cũ khóa học"
                                            value={oldPrice}
                                            setValue={setOldPrice}
                                        />

                                        <InputControl
                                            type="preOrderPrice"
                                            name="preOrderPrice"
                                            label="Giá đặt trước: ( Nếu là khóa pro )"
                                            placeholder="Giá đặt trước khóa học"
                                            value={preOrderPrice}
                                            setValue={setPreOrderPrice}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-7">
                                    <div className="card row">
                                        <div className="form-group col-md-12 mt-3">
                                            <label className=" w-100">
                                                Học được gì sau khóa học:
                                                <FontAwesomeIcon
                                                    className="btn btn-success float-right"
                                                    onClick={() => setInputCount(inputCount + 1)}
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
                                                            onChange={(e) => handleChangeWhatLearn(e, i)}
                                                        />
                                                        {inputCount > 1 && (
                                                            <FontAwesomeIcon
                                                                className={'btn btn-danger float-right remove-input'}
                                                                onClick={() => setInputCount(inputCount - 1)}
                                                                icon={faCircleMinus}
                                                                title="Xóa ô input này"
                                                            />
                                                        )}
                                                    </Fragment>
                                                ))}
                                            </div>
                                        </div>

                                        <FileControl
                                            label="Ảnh xem trước"
                                            image={image}
                                            ref={fileRef}
                                            onChang={handlePrevImage}
                                        />

                                        <FileControl label="Icon" image={icon} ref={iconRef} onChang={handlePrevIcon} />

                                        <InputControl
                                            type="description"
                                            name="description"
                                            label="Mô tả khóa học:"
                                            placeholder="Nhập mô tả khóa học"
                                            value={desc}
                                            setValue={setDesc}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer" style={{ borderTop: 0 }}>
                                <button type="submit" className="btn btn-primary" onClick={handleCreateCourse}>
                                    Thêm khóa học
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCourse;
