import React, { useContext } from 'react';
import { Redirect } from '@reach/router';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager, faUserAstronaut, faPlus, faChalkboardTeacher, faPrescriptionBottleAlt} from '@fortawesome/free-solid-svg-icons';
import Store from './../../contexts/Store';


const UserNav = () => {
    const {user} = useContext(Store);
    return (
        user.isAuthenticated ?
        <nav className="user-nav">

                <NavLink to="/">
                    <FontAwesomeIcon icon={faChalkboardTeacher} size="lg"/>
                </NavLink>
                
                <NavLink to="addDevice">
                    <FontAwesomeIcon icon={faPlus}/> 
                    <FontAwesomeIcon icon={faPager} size="lg"/>
                </NavLink>

                <NavLink to="addMed">
                    <FontAwesomeIcon icon={faPrescriptionBottleAlt} size="lg"/>
                </NavLink>
                
                <NavLink to="userProfile">
                    <FontAwesomeIcon icon={faUserAstronaut} size="lg"/>
                </NavLink>

        </nav>
        :
        <Redirect to="/" />
    )
}
export default UserNav;