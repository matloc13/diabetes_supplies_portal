import { useEffect, useState } from 'react';
import BASE_URL from './../constants'

const useGetDeviceInfo =  (load) => {

    const [devices, setDevices] = useState([])
    
    useEffect(() => {
        if (load.type === "getting") {
            console.log('getting');
            
            getAll();
        }
        return () => {};
    }, [load])

    const promise1 = async () => { 
        const res = await fetch(`${BASE_URL}/device/${load.user_id}`, {
        signal: load.signal,
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': load.token
         }});
         const json = await res.json();
         await new Promise((resolve) => {
             return resolve(
                 setDevices([...devices, {json}])
             )
         })

};
    // const promise2 = async () => { 
    //     try {
    //         const res = await fetch(`${BASE_URL}/user/device/${device_id}/aquire`, {
    //             method: "GET",
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'authorization': token
        
    //             }});
    //             const json = await res.json();
    //             return json;
    //     } catch (error) {
    //         return error;
    //     }
    // }


    // const getAll = async () => {

    //     const fetchingAll = await new Promise.all([promise1, promise2]);
    //     const json = await {
    //         allDevices: fetchingAll[0],
    //         allfailures: fetchingAll[1]
    //     }
    //     await new Promise((resolve) => {
    //         return resolve(
    //             setDevices({
    //                 allDevices: json.allDevices,
    //                 allFailures: json.allFailures
    //         }))
    //     })
    // }

    const getAll = () => {
        return promise1();
    }

   
        return { devices };
}

export default useGetDeviceInfo;