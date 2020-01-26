import React, { useReducer, useEffect } from 'react';
import App from './../App';
import UserContext from './userContext';
import userReducer from '../reducers/userReducer';
import deviceReducer from './../reducers/deviceReducer';
import allDevsReducer from './../reducers/allDevsReducer';

    const initUser = {
        firstName: " ",
        lastName: " ",
        userName: " ",
        age: 0,
        birthDate: Date,
        password: " ",
        isAuthenticated: false,
        id: " ",
        token: ""
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
    const [allDevs, dispatchDevArray] = useReducer(allDevsReducer, []);
    const dispatch = (action) => {
        [dispatchUser, dispatchDevice, dispatchDevArray].forEach((fn) => {
            fn(action);
        })
    }
        device && console.log(device);
        user && console.log(user);
        allDevs && console.log(allDevs);
        
        useEffect(() => {
            if (device) {
                dispatch({ type: "ADD_DEVICE_TO_ARR", payload: device })
            }
            return () => {};
        }, [device])
    

    if (!user) {
        return (
             <>
                <App />
             </>
        )
    } else {
        return (
            <UserContext.Provider value={{user, device, allDevs, dispatch}}>
                <App />
            </UserContext.Provider>
        )
    }
 
}
export default Provider;