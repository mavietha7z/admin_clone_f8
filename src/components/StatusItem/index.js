import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';

import { toggleStatusCourse } from '~/services/apiCourse';
import { toggleStatusPosts } from '~/services/apiBlog';
import { toggleStatusUser } from '~/services/apiAuth';
import { toggleStatusVideo } from '~/services/apiVideo';
import { toggleStatusSlide } from '~/services/slideshow';

const MySwal = withReactContent(Swal);

function StatusItem({ type, data }) {
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleStatus = async () => {
        if (currentUser) {
            if (type === 'courses') {
                const result = await toggleStatusCourse(data._id, currentUser.accessToken);

                if (result.statusCode === 0) {
                    (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed &&
                        window.location.reload();
                } else {
                    MySwal.fire('Thất bại', result.message, 'error');
                }
            } else if (type === 'posts') {
                const result = await toggleStatusPosts(data._id, currentUser.accessToken);

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
            }
        }
    };

    return (
        <Button
            variant={`${data.status ? 'success' : 'danger'}`}
            size="sm"
            onClick={handleStatus}
            title={`${data.status ? 'Tắt' : 'Bật'} trạng thái`}
        >
            {data.status ? 'Bật' : 'Tắt'}
        </Button>
    );
}

export default StatusItem;
