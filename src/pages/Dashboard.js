import React from 'react';
import DeviceArray from './../components/device/DeviceArray';
import UserNav from './../components/nav/UserNav';

import NavLink from './../components/nav/NavLink';

const Dashboard = () => {
    return (
        <main>
            <nav>
                <NavLink to="userProfile">profile</NavLink>
                <NavLink to ="deviceProfile">device</NavLink>
            </nav>
            <UserNav />
            <DeviceArray/>
           
        </main>
    )
}
export default Dashboard;