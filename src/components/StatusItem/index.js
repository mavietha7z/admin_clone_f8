import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';

import { toggleStatusUser } from '~/services/apiAuth';
import { toggleStatusPosts } from '~/services/apiBlog';
import { toggleStatusVideo } from '~/services/apiVideo';
import { toggleStatusSlide } from '~/services/slideshow';
import { toggleStatusCourse } from '~/services/apiCourse';
import { toggleStatusLearningPath } from '~/services/apiLearning';

const MySwal = withReactContent(Swal);

function StatusItem({ type, data }) {
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleStatus = async () => {
        if (currentUser) {
            if (type === 'course') {
                const result = await toggleStatusCourse(data._id, currentUser.accessToken);

                if (result.statusCode === 0) {
                    (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed &&
                        window.location.reload();
                } else {
                    MySwal.fire('Thất bại', result.message, 'error');
                }
            } else if (type === 'account') {
                const result = await toggleStatusUser(currentUser.accessToken, 'status', data._id);

                if (result.statusCode === 0) {
                    (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed &&
                        window.location.reload();
                } else {
                    MySwal.fire('Thất bại', result.message, 'error');
                }
            } else if (type === 'posts') {
                const result = await toggleStatusPosts(currentUser.accessToken, data._id, 'status');

                if (result.statusCode === 0) {
                    (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed &&
                        window.location.reload();
                } else {
                    MySwal.fire('Thất bại', result.message, 'error');
                }
            } else if (type === 'video') {
                const result = await toggleStatusVideo(currentUser.accessToken, 'status', data._id);

                if (result.statusCode === 0) {
                    (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed &&
                        window.location.reload();
                } else {
                    MySwal.fire('Thất bại', result.message, 'error');
                }
            } else if (type === 'slide') {
                const result = await toggleStatusSlide(currentUser.accessToken, data._id);

                if (result.statusCode === 0) {
                    (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed &&
                        window.location.reload();
                } else {
                    MySwal.fire('Thất bại', result.message, 'error');
                }
            } else if (type === 'learning') {
                const result = await toggleStatusLearningPath(currentUser.accessToken, data._id);

                if (result.statusCode === 0) {
                    (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed &&
                        window.location.reload();
                } else {
                    MySwal.fire('Thất bại', result.message, 'error');
                }
            } else {
                MySwal.fire('Lỗi', 'Vui lòng thử lại', 'error');
            }
        }
    };

    return (
        <td>
            <div className="text-center">
                <Button
                    variant={`${data.status ? 'success' : 'danger'}`}
                    size="sm"
                    onClick={handleStatus}
                    title={`${data.status ? 'Tắt' : 'Bật'} trạng thái`}
                >
                    {data.status ? 'Bật' : 'Tắt'}
                </Button>
            </div>
        </td>
    );
}

export default StatusItem;
