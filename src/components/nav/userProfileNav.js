import React from 'react';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faUserAstronaut, faChalkboardTeacher, faPenAlt} from '@fortawesome/free-solid-svg-icons';
const UserProfileNav = () => {
    return (
        <nav>
            <NavLink to="/"><FontAwesomeIcon icon={faChalkboardTeacher} size="lg"/></NavLink>
            <NavLink to=""><FontAwesomeIcon icon={faUserAstronaut} size="lg"/></NavLink>
            <NavLink to="editUser"><FontAwesomeIcon icon={faPenAlt}/> <FontAwesomeIcon icon={faUserAstronaut} size="lg"/></NavLink>
            <NavLink to="userNote"><FontAwesomeIcon icon={faNotesMedical} size="lg"/></NavLink>
        </nav>
    )
}
export default UserProfileNav;