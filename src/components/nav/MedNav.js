import React,{ useContext } from 'react';
import { Redirect } from '@reach/router';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import Store from './../../contexts/Store';

const MedNav = ({med_id}) => {
    const { user } = useContext(Store);
    return (
        user.isAuthenticated ?
        <nav className="med-nav">
            <NavLink to="/"><FontAwesomeIcon icon={faChalkboardTeacher} size="lg"/></NavLink>
            <NavLink to={"/userProfile"}><FontAwesomeIcon icon={faUserAstronaut} size="lg"/></NavLink>
            <NavLink to={`addRefill/${med_id}`}>new refill</NavLink>
        </nav>
        :
        <Redirect to="/" />
    )
}
export default MedNav;