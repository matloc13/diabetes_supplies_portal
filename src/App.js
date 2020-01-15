import React, { useContext } from 'react';
import { Router } from '@reach/router';
import UserContext from './contexts/userContext';
import Gateway from './pages/Gateway';
import Dashboard from './pages/Dashboard';
import DeviceProfile from './components/device/DeviceProfile';
import UserProfile from './components/user/UserProfile';

import './App.css';

const App = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    
    return (
        <div className="App">
           
                {
                    user.isAuthenticated ?
                    <Router>
                        <Dashboard path="/"/>
                            <UserProfile path="userProfile"/>
                            <DeviceProfile path="deviceProfile"/>
                            
                    </Router>

                    :
                        <Gateway path="/gateway"/>  
                }
           
        </div>
    );
}

export default App;
