import React, { useReducer, useEffect } from 'react';
import App from './../App';
import UserContext from './userContext';
import userReducer from '../reducers/userReducer';
import deviceReducer from './../reducers/deviceReducer';
import allDevsReducer from './../reducers/allDevsReducer';
import curReducer from './../reducers/curReducer';

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
        id: " ",
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
    const [curDev, dispatchCurDev] = useReducer(curReducer, initDevice)
    const [device, dispatchDevice] = useReducer(deviceReducer, initDevice);
    const [allDevs, dispatchDevArray] = useReducer(allDevsReducer, []);
    const dispatch = (action) => {
        [dispatchUser, dispatchDevice, dispatchDevArray, dispatchCurDev].forEach((fn) => {
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
            <UserContext.Provider value={{user, device, allDevs, curDev, dispatch}}>
                <App />
            </UserContext.Provider>
        )
    }
 
}
export default Provider;