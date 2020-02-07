import React from 'react';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';

const MedNav = ({med_id}) => {
    return (
        <nav className="med-nav">
            <NavLink to="/"><FontAwesomeIcon icon={faChalkboardTeacher} size="lg"/></NavLink>
            <NavLink to={"/userProfile"}><FontAwesomeIcon icon={faUserAstronaut} size="lg"/></NavLink>
            <NavLink to={`addRefill/${med_id}`}>new refill</NavLink>
        </nav>
    )
}
export default MedNav;