import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className={'wrapper-footer'}>
            <strong>
                <span>Copyright © 2010-2022 </span>
                <Link to="/">2CM Dev</Link>
                <span>.</span>
            </strong>
            <span> All rights reserved</span>
            <div className="float-right">
                <strong>Version 5.5</strong>
            </div>
        </div>
    );
}

export default Footer;
