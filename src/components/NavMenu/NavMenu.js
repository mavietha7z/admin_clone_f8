import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import styles from './NavMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

classNames.bind(styles);

function NavMenu({
    nameHome = null,
    pathHome,
    colorHome = 'success',
    namePlus = null,
    pathPlus,
    colorPlus = 'primary',
    nameTime = null,
    pathTime,
    colorTime = 'warning',
    nameCheck = null,
    pathCheck,
    colorCheck = 'info',
    nameOpen = null,
    pathOpen,
    colorOpen = 'warning',
    nameSend = null,
    pathSend,
    colorSend = 'warning',
    nameKey = null,
    pathKey,
    colorKey = 'success',
    nameTrash = null,
    pathTrash,
    colorTrash = 'primary',
    nameDatabase = null,
    pathDatabase,
    colorDatabase = 'danger',
    nameSetting = null,
    pathSetting,
    colorSetting = 'dark',
    float,
}) {
    return (
        <div className={cx('col-7', 'wrapper')}>
            <div className={float}>
                {nameHome !== null ? (
                    <Link to={pathHome}>
                        <button className={`btn btn-${colorHome}`}>
                            <FontAwesomeIcon icon={faHome} />
                            <span>{nameHome}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}

                {nameOpen !== null ? (
                    <Link to={pathOpen}>
                        <button className={`btn btn-${colorOpen}`}>
                            {/* <FaFolderOpen /> */}
                            <span>{nameOpen}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}

                {namePlus !== null ? (
                    <Link to={pathPlus}>
                        <button className={`btn btn-${colorPlus}`}>
                            {/* <FaPlusCircle /> */}
                            <span>{namePlus}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}

                {nameTime !== null ? (
                    <Link to={pathTime}>
                        <button className={`btn btn-${colorTime}`}>
                            {/* <FaClock /> */}
                            <span>{nameTime}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}

                {nameCheck !== null ? (
                    <Link to={pathCheck}>
                        <button className={`btn btn-${colorCheck}`}>
                            {/* <FaCheckCircle /> */}
                            <span>{nameCheck}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}

                {nameSend !== null ? (
                    <Link to={pathSend}>
                        <button className={`btn btn-${colorSend}`}>
                            {/* <FaTelegramPlane /> */}
                            <span>{nameSend}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}

                {nameKey !== null ? (
                    <Link to={pathKey}>
                        <button className={`btn btn-${colorKey}`}>
                            {/* <FaKey /> */}
                            <span>{nameKey}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}

                {nameTrash !== null ? (
                    <Link to={pathTrash}>
                        <button className={`btn btn-${colorTrash}`}>
                            {/* <FaTrashAlt /> */}
                            <span>{nameTrash}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}

                {nameDatabase !== null ? (
                    <Link to={pathDatabase}>
                        <button className={`btn btn-${colorDatabase}`}>
                            {/* <FaDatabase /> */}
                            <span>{nameDatabase}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}

                {nameSetting !== null ? (
                    <Link to={pathSetting}>
                        <button className={`btn btn-${colorSetting}`}>
                            {/* <FaCog /> */}
                            <span>{nameSetting}</span>
                        </button>
                    </Link>
                ) : (
                    <Fragment />
                )}
            </div>
        </div>
    );
}

export default NavMenu;
