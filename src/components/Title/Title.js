import './Title.css';
import Breadcrumb from '../Breadcrumb';

function Title({ name }) {
    return (
        <div className="col-5">
            <h1 className="wrapper-title">{name}</h1>
            <Breadcrumb name={name} />
        </div>
    );
}

export default Title;
