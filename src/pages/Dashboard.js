import React, { useContext, useEffect, useState } from 'react';
import { Router } from '@reach/router';
import DeviceArray from './../components/device/DeviceArray';
import UserNav from './../components/nav/UserNav';
import useGetDeviceInfo from './../utilHooks/useGetDeviceInfo';
import UserContext from './../contexts/userContext';
import UserProfile from './../pages/UserProfile';
import AddDevice from './../pages/AddDevice';
import AddMedicine from '../components/medicine/AddMedicine';
import useManageMeds from './../utilHooks/useManageMeds'

const Dashboard = () => {
    const { user, medsArr } = useContext(UserContext);
    const [load, setLoad] = useState({
        type: "not",
        user_id: ' ',
        token: ' '
})

    const { devices } = useGetDeviceInfo(load);
    const { getAllMeds } = useManageMeds();

    useEffect(() => {
        console.log(devices);
        console.log(medsArr);
        
        const ac = new AbortController();
        const signal = ac.signal
        getAllMeds()
        setLoad({
            type: "getting",
            user_id: user.id,
            token: user.token,
            signal
        })
        return () => {
            ac.abort()
        };
    }, [])//eslint-disable-line
    
    return (
        <main className="profile-dashboard">

            <UserNav />

            <Router>
                <UserProfile path="userProfile"/>
                <AddDevice path="addDevice" />
                <AddMedicine path="addMed" />
            </Router>
            <DeviceArray />
           
        </main>
    )
}
export default Dashboard;