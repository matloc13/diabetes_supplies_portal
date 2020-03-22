import React, { useContext, useEffect } from 'react';
import { Router } from '@reach/router';
import Store from './contexts/Store';
import {
    MedicineProfile, 
    DeviceProfile, 
    Dashboard,
    Gateway, 
    UserProfile, 
    AddDevice
} from './pages/index';
import { EditUser, UserNote } from './components/user/index';
import { DeviceFailures, DeviceChanges, DeviceAquired } from './components/device/index';
import {AddMedicine, AddRefill} from './components/medicine/index';
import useAuth from './utilHooks/useAuth';
import './scss/App.scss';

const App = () => {
    const {user, medsArr } = useContext(Store);
    const { handleLogin } = useAuth();
    // console.log(user);
    useEffect(() => {
        if (!user.token && user.isAuthenticated) {
            handleLogin({ email: user.email, password: user.password })
        }
        return () => {};
    }, [user])
    console.log(medsArr);
    
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


                            <MedicineProfile path="medicineProfile/:med_id">
                                <AddRefill path="addRefill/:med_id" />
                            </MedicineProfile>

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
