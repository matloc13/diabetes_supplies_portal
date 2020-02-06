import React, { useReducer, useEffect } from 'react';
import App from './../App';
import { UserContext }from './index';
import userReducer from '../reducers/userReducer';
import deviceReducer from './../reducers/deviceReducer';
import allDevsReducer from './../reducers/allDevsReducer';
import curReducer from './../reducers/curReducer';
import medsArrReducer from './../reducers/medsArrReducer';
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
        refillLength: 0
    };



const Provider = () => {
    
    const [user, dispatchUser] = useReducer(userReducer, initUser);
    const [curDev, dispatchCurDev] = useReducer(curReducer, initDevice)
    const [device, dispatchDevice] = useReducer(deviceReducer, initDevice);
    const [allDevs, dispatchDevArray] = useReducer(allDevsReducer, []);
    const [med, dispatchMed] = useReducer(medReducer, initMed);
    const [medsArr, dispatchMeds] = useReducer(medsArrReducer, []);

    const dispatch = (action) => {
        [dispatchUser, dispatchDevice, dispatchDevArray, dispatchCurDev,  dispatchMed, dispatchMeds ].forEach((fn) => {
            fn(action);
        })
    }
        // device && console.log(device);
        // user && console.log(user);
        // allDevs && console.log(allDevs);
        // med && console.log(med);
        medsArr && console.log(medsArr);
         
        useEffect(() => {
            if (device) {
                dispatch({ type: "ADD_DEVICE_TO_ARR", payload: device })
            }
            return () => {};
        }, [device])
        
        useEffect(() => {
            // console.log(med);
            if (med) {
                dispatch({ type: "ADD_MED_TO_MEDS",  payload: med })
            }
            return () => {};
        }, [med])


    if (!user) {
        return (
             <>
                <App />
             </>
        )
    } else {
        return (
            <UserContext.Provider value={{
                    user, 
                    device, 
                    allDevs, 
                    medsArr,
                    curDev, 
                    dispatch
            }}>
                    <App />
            </UserContext.Provider>
        )
    }
 
}
export default Provider;