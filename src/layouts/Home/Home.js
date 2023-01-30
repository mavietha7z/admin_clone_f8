import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from '~/configs';
import TitleGlobal from '~/components/TitleGlobal';

function Home() {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        if (!currentUser) {
            navigate('/login');
        }
    }, [currentUser]);

    return (
        <div className={'wrapper-global'}>
            <div className={'header-global'}>
                <div className="row">
                    <TitleGlobal name="Bảng quản trị" />
                </div>
            </div>

            <div className="content-global">
                <div className="row">
                    {config.home.map((child, index) => (
                        <div className="col-3" key={index}>
                            <div className="home-box">
                                <span className={`home-box-icon bg-${child.bg}`}>
                                    <FontAwesomeIcon icon={child.icon} />
                                </span>
                                <div className="home-box-content">
                                    <span className="home-box-text">{child.title}</span>
                                    <span className="home-box-number">1</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
