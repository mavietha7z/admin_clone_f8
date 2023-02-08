import { useState } from 'react';
import { Image } from '~/assets/image';
import { Link } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import config from '~/configs';
import './Sidebar.css';

function Sidebar() {
    const [openIndex, setOpenIndex] = useState(-1);
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className={isHover ? 'wrapper active' : 'wrapper'}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Link to="/" className="link-logo">
                <div className="logo">
                    <img src={Image.logo} alt="F8" className="img-logo" />
                </div>
            </Link>

            <div className="sidebar">
                <div className="over">
                    <ul className="sidebar-list">
                        {config.sidebar.map((sidebar, index) => (
                            <li className="sidebar-item" key={index}>
                                {sidebar.sub ? (
                                    <div
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                        aria-expanded={openIndex === index}
                                        aria-controls={`collapse-${index}`}
                                        className="link"
                                    >
                                        <FontAwesomeIcon icon={sidebar.icon} className="icon" />
                                        <span className="link-title">
                                            {sidebar.title}

                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </span>
                                    </div>
                                ) : (
                                    <Link
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                        aria-expanded={openIndex === index}
                                        aria-controls={`collapse-${index}`}
                                        className="link"
                                        to={sidebar.linkTo}
                                    >
                                        <FontAwesomeIcon icon={sidebar.icon} className="icon" />
                                        <span className="link-title">{sidebar.title}</span>
                                    </Link>
                                )}

                                {sidebar.sub && (
                                    <Collapse in={openIndex === index}>
                                        <div id={`collapse-${index}`}>
                                            <ul className="sidebar-child">
                                                {sidebar.sub.map((child, index) => (
                                                    <li key={index}>
                                                        <Link className="link-sub" to={child.linkTo}>
                                                            <FontAwesomeIcon
                                                                className="icon-sub"
                                                                icon={faChevronRight}
                                                            />
                                                            <span className="title-sub">{child.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Collapse>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
