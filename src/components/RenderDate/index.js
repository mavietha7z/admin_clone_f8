import moment from 'moment';
import { Fragment } from 'react';

function RenderDate({ createdAt, updatedAt }) {
    return (
        <Fragment>
            <div className="text-center">
                <strong>{moment(createdAt).format('DD/MM/YYYY - hh:mm')}</strong>
            </div>
            <div className="text-center">
                <strong>{moment(updatedAt).format('DD/MM/YYYY - hh:mm')}</strong>
            </div>
        </Fragment>
    );
}

export default RenderDate;
