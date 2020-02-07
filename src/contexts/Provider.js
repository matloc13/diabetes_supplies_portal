import React, { useReducer, useEffect } from 'react';
import App from './../App';
import { Store }from './index';
import userReducer from '../reducers/userReducer';
import deviceReducer from './../reducers/deviceReducer';
import allDevsReducer from './../reducers/allDevsReducer';
import curReducer from './../reducers/curReducer';
import medsArrReducer from './../reducers/medsArrReducer';
import medReducer from './../reducers/medReducer';
import refillReducer from './../reducers/refillReducer';

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

    const initRefill = [{
        id: " ",
        date: " ",
        details: " "
    }];



const Provider = () => {
    
    const [user, dispatchUser] = useReducer(userReducer, initUser);
    const [curDev, dispatchCurDev] = useReducer(curReducer, initDevice)
    const [device, dispatchDevice] = useReducer(deviceReducer, initDevice);
    const [allDevs, dispatchDevArray] = useReducer(allDevsReducer, []);
    const [medsArr, dispatchMeds] = useReducer(medsArrReducer, [initMed]);
    const [refills, dispatchRefill] = useReducer(refillReducer, initRefill)
;
    const dispatch = (action) => {
        [dispatchUser, dispatchDevice, dispatchDevArray, dispatchCurDev,   dispatchMeds, dispatchRefill ].forEach((fn) => {
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
        
        // useEffect(() => {
        //     // console.log(med);
        //     if (med) {
        //         dispatch({ type: "ADD_MED_TO_MEDS",  payload: med })
        //     }
        //     return () => {};
        // }, [med])

    if (!user) {
        return (
             <>
                <App />
             </>
        )
    } else {
        return (
            <Store.Provider value={{
                    user, 
                    device, 
                    allDevs, 
                    medsArr,
                    curDev, 
                    refills,
                    dispatch,
            }}>
                    <App />
            </Store.Provider>
        )
    }
 
}
export default Provider;