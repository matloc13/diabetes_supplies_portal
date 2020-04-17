import React from 'react';
import './_nav.scss';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileExcel,
    faPeopleCarry,
    faFileMedical,
    faPager,
    faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';

const DeviceItemNav = () => {
    return (
        <nav>
            <NavLink to="/">
                <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" />
            </NavLink>
            <NavLink to="dChange">
                <FontAwesomeIcon icon={faPager} size="lg" />{' '}
                <FontAwesomeIcon icon={faFileMedical} size="lg" />
            </NavLink>
            <NavLink to="dAquire">
                <FontAwesomeIcon icon={faPeopleCarry} size="lg" />
            </NavLink>
            <NavLink to="dFailure">
                <FontAwesomeIcon icon={faPager} size="lg" />{' '}
                <FontAwesomeIcon icon={faFileExcel} size="lg" />
            </NavLink>
        </nav>
    );
};
export default DeviceItemNav;
