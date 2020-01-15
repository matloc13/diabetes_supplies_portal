import React from 'react';
import {Router} from '@reach/router'
import NavLink from './NavLink';
const UserNav = () => {
    return (
        <nav>

                <NavLink to="/addDevice">add new device</NavLink>
                <NavLink to="/editUser">edit user info</NavLink>

        </nav>
    )
}
export default UserNav;