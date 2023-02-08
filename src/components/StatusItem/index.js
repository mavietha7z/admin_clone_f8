import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { toggleStatusUser } from '~/services/apiAuth';
import { toggleStatusPosts } from '~/services/apiBlog';
import { toggleStatusVideo } from '~/services/apiVideo';
import { toggleStatusSlide } from '~/services/slideshow';
import { toggleStatusCourse } from '~/services/apiCourse';
import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { toggleStatusLearningPath } from '~/services/apiLearning';

function StatusItem({ type, data }) {
    let isType = true;
    let functionDelete;

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    switch (type) {
        case 'course':
            functionDelete = toggleStatusCourse;
            break;
        case 'account':
            functionDelete = toggleStatusUser;
            break;
        case 'posts':
            functionDelete = toggleStatusPosts;
            break;
        case 'video':
            functionDelete = toggleStatusVideo;
            break;
        case 'slide':
            functionDelete = toggleStatusSlide;
            break;
        case 'learning':
            functionDelete = toggleStatusLearningPath;
            break;
        default:
            isType = false;
    }

    const handleStatus = async () => {
        if (isType) {
            const result = await functionDelete(currentUser.accessToken, 'status', data._id);
            if (result.statusCode === 0) {
                mySwalSuccess(result.message);
            } else {
                mySwalError('fail', result.message);
            }
        } else {
            mySwalError('error', 'Vui lòng thử lại');
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
