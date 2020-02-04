import React, { useContext, useEffect } from 'react';
import { Router } from '@reach/router';
import UserContext from './contexts/userContext';
import Gateway from './pages/Gateway';
import Dashboard from './pages/Dashboard';
import DeviceProfile from './pages/DeviceProfile';
import UserProfile from './pages/UserProfile';
import AddDevice from './pages/AddDevice';
import { EditUser, UserNote } from './components/user/index';
import {DeviceFailures, DeviceChanges, DeviceAquired} from './components/device/index';
import AddMedicine from './components/medicine/AddMedicine';
import useAuth from './utilHooks/useAuth';

import './scss/App.scss';

const App = () => {
    const {user} = useContext(UserContext);
    const { handleLogin } = useAuth();
    // console.log(user);
    useEffect(() => {
        if (!user.token && user.isAuthenticated) {
            handleLogin({ email: user.email, password: user.password })
        }
        return () => {};
    }, [user])
    return (
        <div className="App">
           {/* ideal place for react.lazy() */}
                {
                    user.isAuthenticated ?
                    <Router>
                        <Dashboard path="/">
                            <AddDevice path="addDevice" />
                            <AddMedicine path="addMed" />
                            
                        </Dashboard>
                            <DeviceProfile path="deviceProfile/:deviceId">  
                                <DeviceChanges path="dChange" />
                                <DeviceAquired path="dAquire" />
                                <DeviceFailures path="dFailure" />  
                            </DeviceProfile>
                            <UserProfile path="userProfile">
                                <EditUser path="editUser" />
                                <UserNote path="userNote" />
                            </UserProfile>
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
