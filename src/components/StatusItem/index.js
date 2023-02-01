import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';

import { toggleStatusCourse } from '~/services/apiCourse';
import { toggleStatusPosts } from '~/services/apiBlog';

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
