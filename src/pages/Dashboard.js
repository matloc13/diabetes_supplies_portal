import React from 'react';

import NavLink from './../components/nav/NavLink';

const Dashboard = () => {
    return (
        <main>
            <nav>
                <NavLink to="userProfile">profile</NavLink>
                <NavLink to ="deviceProfile">device</NavLink>
            </nav>
           
        </main>
    )
}
export default Dashboard;