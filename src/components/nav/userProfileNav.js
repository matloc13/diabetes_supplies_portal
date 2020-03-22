import React, { useContext } from 'react';
import { Redirect } from '@reach/router';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faUserAstronaut, faChalkboardTeacher, faPenAlt} from '@fortawesome/free-solid-svg-icons';
import Store from './../../contexts/Store';

const UserProfileNav = () => {
    const { user } = useContext(Store);
    return (
        user.isAuthenticated ?
        <nav>
            <NavLink to="/"><FontAwesomeIcon icon={faChalkboardTeacher} size="lg"/></NavLink>
            <NavLink to=""><FontAwesomeIcon icon={faUserAstronaut} size="lg"/></NavLink>
            <NavLink to="editUser"><FontAwesomeIcon icon={faPenAlt}/> <FontAwesomeIcon icon={faUserAstronaut} size="lg"/></NavLink>
            <NavLink to="userNote"><FontAwesomeIcon icon={faNotesMedical} size="lg"/></NavLink>
        </nav>
        :
        <Redirect to="/" />
    )
}
export default UserProfileNav;