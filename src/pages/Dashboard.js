import React, { useContext, useEffect, useState } from 'react';
import DeviceArray from './../components/device/DeviceArray';
import UserNav from './../components/nav/UserNav';
import useGetDeviceInfo from './../utilHooks/useGetDeviceInfo';
import UserContext from './../contexts/userContext';
const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [load, setLoad] = useState({
        type: "not",
        user_id: ' ',
        token: ' '
})

    const { devices } = useGetDeviceInfo(load);

    useEffect(() => {
        console.log(devices);
        
        const ac = new AbortController();
        const signal = ac.signal
        setLoad({
            type: "getting",
            user_id: user.id,
            token: user.token,
            signal
        })
        return () => {
            ac.abort()
        };
    }, [])
    
    return (
        <main>

            <UserNav />
            <DeviceArray />
           
        </main>
    )
}
export default Dashboard;