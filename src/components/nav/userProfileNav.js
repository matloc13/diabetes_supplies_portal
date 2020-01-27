import React from 'react';
import NavLink from './NavLink';
const UserProfileNav = () => {
    return (
        <nav>
            <NavLink to="/">top</NavLink>
            <NavLink to="">profile</NavLink>
            <NavLink to="editUser">edit user info</NavLink>
            <NavLink to="userNote">add a note</NavLink>
        </nav>
    )
}
export default UserProfileNav;