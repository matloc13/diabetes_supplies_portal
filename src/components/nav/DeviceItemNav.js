import React from 'react';
import './_nav.scss';
import NavLink from './NavLink';

const DeviceItemNav = () => {
    return (

        <nav>
            <NavLink to="/">back</NavLink>
            <NavLink to="dChange">Device Changes</NavLink>
            <NavLink to="dAquire">Device Supplies Arrival</NavLink>
            <NavLink to="dFailure">Device Failures</NavLink>
        </nav>
        
    )
}
export default DeviceItemNav;