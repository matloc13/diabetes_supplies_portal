import React from 'react';
import DeviceArray from './../components/device/DeviceArray';

import NavLink from './../components/nav/NavLink';

const Dashboard = () => {
    return (
        <main>
            <nav>
                <NavLink to="userProfile">profile</NavLink>
                <NavLink to ="deviceProfile">device</NavLink>
            </nav>
            <DeviceArray/>
           
        </main>
    )
}
export default Dashboard;