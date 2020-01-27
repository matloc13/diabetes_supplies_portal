import React from 'react';
import NavLink from './NavLink';
const UserNav = () => {
    return (
        <nav className="user-nav">

                <NavLink to="/">top</NavLink>
                <NavLink to="addDevice">add device</NavLink>
                <NavLink to="userProfile">profile</NavLink>

        </nav>
    )
}
export default UserNav;