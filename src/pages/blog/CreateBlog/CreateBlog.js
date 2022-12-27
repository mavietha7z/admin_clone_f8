import classNames from 'classnames/bind';
import Title from '~/components/Title';
import NavMenu from '~/components/NavMenu';
import EditorBlog from '~/components/EditorBlog';

import styles from '~/GlobalStyles.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function CreateBlog() {
    const [title, setTitle] = useState('');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Viết blog" />

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
                        <div className={cx('wrapper-editor')}>
                            <div className={cx('title-post')}>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Tiêu đề"
                                />
                            </div>
                            <div className="mt-4">
                                <EditorBlog title={title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
