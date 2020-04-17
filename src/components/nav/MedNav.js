import React from 'react';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const MedNav = ({ medId }) => {
    return (
        <nav className="med-nav">
            <NavLink to="/">
                <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" />
            </NavLink>
            <NavLink to={'/userProfile'}>
                <FontAwesomeIcon icon={faUserAstronaut} size="lg" />
            </NavLink>
            <NavLink to={`addRefill/${medId}`}>new refill</NavLink>
        </nav>
    );
};
export default MedNav;
