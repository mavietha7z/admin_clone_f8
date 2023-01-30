import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Title from '~/components/Title';
import CreateLesson from './CreateLesson';
import CreateChapter from './CreateChapter';
import ChapterItem from '~/components/ChapterItem';
import { getCourseByType } from '~/services/apiCourse';

function Chapter() {
    const [course, setCourse] = useState(null);
    const [chapters, setChapters] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        if (currentUser) {
            const fetchApi = async () => {
                const result = await getCourseByType(currentUser.accessToken, 'uid', id);
                setCourse(result.data);
                setChapters(result?.data.chapter);
            };
            fetchApi();
        } else {
            navigate('/login');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className={'wrapper-global'}>
            <div className={'header-global'}>
                <div className="row">
                    <Title name="Chương & bài học" />
                </div>
            </div>

            <div className="content-global">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className={'card-header bg-white'}>
                                <div className="col-md-6 float-left">
                                    <h2 className="mb-0 mt-2">
                                        {!course ? 'Khóa học này không tồn tại' : course?.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="row mb-5">
                                    <nav className="col-12">
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a
                                                className="nav-item nav-link active"
                                                id="nav-chapter-tab"
                                                data-toggle="tab"
                                                href="#nav-chapter"
                                                role="tab"
                                                aria-controls="nav-chapter"
                                                aria-selected="true"
                                            >
                                                Chương
                                            </a>
                                            <a
                                                className="nav-item nav-link"
                                                id="nav-lesson-tab"
                                                data-toggle="tab"
                                                href="#nav-lesson"
                                                role="tab"
                                                aria-controls="nav-lesson"
                                                aria-selected="false"
                                            >
                                                Bài học
                                            </a>
                                        </div>
                                    </nav>

                                    <div className="tab-content col-12 mt-2" id="nav-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="nav-chapter"
                                            role="tabpanel"
                                            aria-labelledby="nav-chapter-tab"
                                        >
                                            <CreateChapter courseId={id} />
                                        </div>
                                        <div
                                            className="tab-pane fade row"
                                            id="nav-lesson"
                                            role="tabpanel"
                                            aria-labelledby="nav-lesson-tab"
                                        >
                                            <CreateLesson courseId={id} chapters={chapters} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="mb-4">Danh sách chương</h2>
                                    </div>

                                    {chapters?.length > 0 ? (
                                        chapters?.map((chapter, index) => (
                                            <div className="mb-2 col-12" key={index}>
                                                <div
                                                    className="btn btn-secondary w-100 text-left"
                                                    style={{ padding: '10px 30px', fontSize: '1.8rem' }}
                                                    data-toggle="collapse"
                                                    data-target={`#collapseExample${index}`}
                                                    aria-expanded="false"
                                                    aria-controls={`collapseExample${index}`}
                                                >
                                                    {`${index + 1}. ${chapter.nameChapter}`}
                                                </div>
                                                <div className="collapse" id={`collapseExample${index}`}>
                                                    {chapter.lesson.length > 0 ? (
                                                        <table className="table table-bordered table-striped dataTable">
                                                            <ChapterItem lesson={chapter.lesson} />
                                                        </table>
                                                    ) : (
                                                        <table className="table table-bordered table-striped dataTable">
                                                            <tbody>
                                                                <tr className="text-center" style={{ fontWeight: 600 }}>
                                                                    <td>Không có bài học nào</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div style={{ backgroundColor: '#f4f6f9' }} className="p-5 w-100">
                                            <div className="text-center">
                                                <span
                                                    className="text-center"
                                                    style={{ fontWeight: 600, fontSize: '1.8rem' }}
                                                >
                                                    Không có chương nào
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chapter;
