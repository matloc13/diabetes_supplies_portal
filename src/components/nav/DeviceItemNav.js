import React, { useContext } from 'react';
import './_nav.scss';
import { Redirect } from '@reach/router';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faPeopleCarry, faFileMedical, faPager, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Store from './../../contexts/Store';

const DeviceItemNav = () => {
    const { user } = useContext(Store)
    return (
        user.isAuthenticated ? 
        <nav>
            <NavLink to="/"><FontAwesomeIcon icon={faChalkboardTeacher} size="lg"/></NavLink>
            <NavLink to="dChange"><FontAwesomeIcon icon={faPager} size="lg"/> <FontAwesomeIcon icon={faFileMedical} size="lg"/></NavLink>
            <NavLink to="dAquire"><FontAwesomeIcon icon={faPeopleCarry} size="lg"/></NavLink>
            <NavLink to="dFailure"><FontAwesomeIcon icon={faPager} size="lg"/> <FontAwesomeIcon icon={faFileExcel} size="lg"/></NavLink>
        </nav>
        :
        <Redirect to="/" />
    )
}
export default DeviceItemNav;