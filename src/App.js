import React, { useContext } from 'react';
import { Router } from '@reach/router';
import UserContext from './contexts/userContext';
import Gateway from './pages/Gateway';
import Dashboard from './pages/Dashboard';
import DeviceProfile from './components/device/DeviceProfile';
import UserProfile from './components/user/UserProfile';
import AddDevice from './pages/AddDevice';
import EditUser from './pages/EditUser';

import './App.scss';

const App = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    
    return (
        <div className="App">
           {/* ideal place for react.lazy() */}
                {
                    user.isAuthenticated ?
                    <Router>
                        <Dashboard path="/"/>
                            <UserProfile path="userProfile"/>
                            <AddDevice path="/addDevice" />
                            <EditUser path="/editUser" />
                            <DeviceProfile path="deviceProfile"/>    
                    </Router>

                    :
                    
                    <Router>
                        <Gateway path="/"/>  
                    </Router>
                }
           
        </div>
    );
}

export default App;
