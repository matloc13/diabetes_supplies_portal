import React, { useReducer } from 'react';
import App from './../App';
import UserContext from './userContext';
import userReducer from '../reducers/userReducer';
import deviceReducer from './../reducers/deviceReducer';

    const initUser = {
        firstName: " ",
        lastName: " ",
        age: 0,
        birthDate: Date.now(),
        password: " ",
        isAuthenticated: false,
        id: " "
    }

    const initDevice = {
        user_id: " ",
        deviceName: " ",
        brand: " ",
        model: " ",
        serialNumber: " ",
        userSpec: {},
        deviceChanges: [],
        deviceAquired: [],
        deviceFailure: []
    }

const Provider = () => {
    const [user, dispatchUser] = useReducer(userReducer, initUser);
    const [device, dispatchDevice] = useReducer(deviceReducer, initDevice);
    const dispatch = (action) => {
        [dispatchUser, dispatchDevice].forEach((fn) => {
            fn(action);
        })
    }
    return (
        <UserContext.Provider value={{user, device, dispatch}}>
            <App />
        </UserContext.Provider>
    )
}
export default Provider;