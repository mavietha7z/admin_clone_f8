import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createNewChapter } from '~/services/apiCourse';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function CreateChapter({ courseId }) {
    const [nameChapter, setNameChapter] = useState('');

    const MySwal = withReactContent(Swal);
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleCreateNewChapter = async () => {
        if (nameChapter !== '') {
            const newChapter = {
                nameChapter,
                courseId,
            };
            const result = await createNewChapter(newChapter, currentUser.accessToken);

            if (result.errCode === 0) {
                MySwal.fire('Thành công', `${result.message}`, 'success').then((res) => {
                    if (res.isConfirmed) {
                        window.location.reload();
                    }
                });
            } else {
                MySwal.fire('Lỗi', `${result.message}`, 'error');
            }
        } else {
            MySwal.fire('Lỗi', 'Tên chương không được để trống', 'error');
        }
    };

    return (
        <div className="col-6">
            <div className="card">
                <div
                    className="card-header"
                    data-toggle="collapse"
                    data-target="#add-new-chapter"
                    aria-expanded="false"
                    aria-controls="add-new-chapter"
                    style={{ cursor: 'pointer' }}
                >
                    <h3>Thêm chương mới</h3>
                </div>
            </div>
            <div className="collapse" id="add-new-chapter">
                <div className="card-body">
                    <div className="form-group">
                        <label>Tên chương:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tên chương mới"
                            value={nameChapter}
                            onChange={(e) => setNameChapter(e.target.value)}
                        />
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={handleCreateNewChapter}>
                        Thêm chương
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateChapter;
