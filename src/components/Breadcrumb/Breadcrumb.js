import { Link } from 'react-router-dom';
import './Breadcrumb.css';

function Breadcrumb({ name }) {
    return (
        <div className="wrapper-crumb">
            <div className="content-crumb">
                <Link to="/">Bảng quản trị </Link>
                <span className="crumb-separate">/</span>
                <span className="link-next">{name}</span>
            </div>
        </div>
    );
}

export default Breadcrumb;
