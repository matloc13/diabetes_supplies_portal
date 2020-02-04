import React, { useReducer, useEffect } from 'react';
import App from './../App';
import UserContext from './userContext';
import userReducer from '../reducers/userReducer';
import deviceReducer from './../reducers/deviceReducer';
import allDevsReducer from './../reducers/allDevsReducer';
import curReducer from './../reducers/curReducer';
import medsReducer from './../reducers/medsReducer';
import medReducer from './../reducers/medReducer';

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
    };

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
    };

    const initMed = {
        id: " ",
        user_id: " ",
        name: " ",
        description: " ",
        prescriptionNumber: " ",
        doctor: " ",
        pharmacy: " ",
        size: " ",
    };

    // const initMeds = [initMed];

const Provider = () => {
    
    const [user, dispatchUser] = useReducer(userReducer, initUser);
    const [curDev, dispatchCurDev] = useReducer(curReducer, initDevice)
    const [device, dispatchDevice] = useReducer(deviceReducer, initDevice);
    const [allDevs, dispatchDevArray] = useReducer(allDevsReducer, []);
    const [med, dispatchMed] = useReducer(medReducer, initMed);
    const [meds, dispatchMeds] = useReducer(medsReducer, [initMed]);
    const dispatch = (action) => {
        [dispatchUser, dispatchDevice, dispatchDevArray, dispatchCurDev, dispatchMeds, dispatchMed].forEach((fn) => {
            fn(action);
        })
    }
        // device && console.log(device);
        // user && console.log(user);
        // allDevs && console.log(allDevs);
        // med && console.log(med);
        // meds && console.log(meds);
        
        
        
        useEffect(() => {
            if (device) {
                dispatch({ type: "ADD_DEVICE_TO_ARR", payload: device })
            }
            return () => {};
        }, [device])
        
        useEffect(() => {
            console.log(med);
            
            if (med) {
                console.log(meds);
                
                dispatch({ type: "ADD_MED_TO_MEDS",  med })
            }
            return () => {};
        }, [med, meds])
    

    if (!user) {
        return (
             <>
                <App />
             </>
        )
    } else {
        return (
            <UserContext.Provider value={
                {
                    user, 
                    device, 
                    allDevs, 
                    meds, 
                    med, 
                    curDev, 
                    dispatch
                    }}>
                <App />
            </UserContext.Provider>
        )
    }
 
}
export default Provider;