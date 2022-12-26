import classNames from 'classnames/bind';
import Title from '~/components/Title';
import NavMenu from '~/components/NavMenu';
import Editor from '~/components/Editor';

import styles from '~/GlobalStyles.module.scss';
const cx = classNames.bind(styles);

function CreateBlog() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Danh sách khóa học" />

                    <NavMenu
                        nameHome="Trang chủ"
                        pathHome="/blog"
                        colorHome="warning"
                        namePlus="Thêm mới"
                        pathPlus="/blog/create"
                        colorPlus="success"
                        float="float-right"
                    />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className={cx('title-post')}>
                            <input type="text" placeholder="Tiêu đề" />
                        </div>
                        <div className="mt-4">
                            <Editor />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
