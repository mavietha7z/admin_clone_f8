import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const mySwalSuccess = async (message, load = null) => {
    (await MySwal.fire('Thành công', message, 'success')).isConfirmed && !load && window.location.reload();
};

export const mySwalError = async (type, message) => {
    MySwal.fire(type === 'fail' ? 'Thất bại' : 'Lỗi', message, 'error');
};
