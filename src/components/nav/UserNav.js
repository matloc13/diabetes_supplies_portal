import React from 'react';
import NavLink from './NavLink';
const UserNav = () => {
    return (
        <nav className="user-nav">

                <NavLink to="/addDevice">add new device</NavLink>
                <NavLink to="/editUser">edit user info</NavLink>

        </nav>
    )
}
export default UserNav;