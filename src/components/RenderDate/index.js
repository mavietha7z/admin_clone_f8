import moment from 'moment';

function RenderDate({ createdAt, updatedAt }) {
    return (
        <td>
            <div className="text-center">
                <strong>{moment(createdAt).format('DD/MM/YYYY - hh:mm')}</strong>
            </div>
            <div className="text-center">
                <strong>{moment(updatedAt).format('DD/MM/YYYY - hh:mm')}</strong>
            </div>
        </td>
    );
}

export default RenderDate;
