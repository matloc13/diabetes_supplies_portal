import React, { useContext, useEffect, useState } from 'react';
import { Router } from '@reach/router';
import DeviceArray from './../components/device/DeviceArray';
import UserNav from './../components/nav/UserNav';
import useGetDeviceInfo from './../utilHooks/useGetDeviceInfo';
import Store from '../contexts/Store';
import { UserProfile, AddDevice } from './../pages/index';
import { AddMedicine, MedicineList } from '../components/medicine/index';
import useManageMeds from './../utilHooks/useManageMeds';

const Dashboard = () => {
    const { user, medsArr } = useContext(Store);
    const [load, setLoad] = useState({
        type: 'not',
        user_id: ' ',
        token: ' ',
    });

    const { devices } = useGetDeviceInfo(load);
    const { getAllMeds } = useManageMeds();

    useEffect(() => {
        if (devices) {
            console.log('hello', devices.length);
            // console.log(devices);
            // console.log(medsArr);
        }

        const ac = new AbortController();
        const signal = ac.signal;
        getAllMeds();
        setLoad({
            type: 'getting',
            user_id: user.id,
            token: user.token,
            signal,
        });
        return () => {
            ac.abort();
        };
    }, []); //eslint-disable-line

    return (
        <main className="profile-dashboard">
            <UserNav />

            <Router>
                <UserProfile path="userProfile" />
                <AddDevice path="addDevice" />
                <AddMedicine path="addMed" />
            </Router>
            <DeviceArray />
            <MedicineList meds={medsArr} />
        </main>
    );
};
export default Dashboard;
