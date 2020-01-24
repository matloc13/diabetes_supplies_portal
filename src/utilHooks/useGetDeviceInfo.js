import { useEffect, useContext } from 'react';
import BASE_URL from './../constants';
import UserContext from './../contexts/userContext';

const useGetDeviceInfo = (load) => {
    const { user, device, allDevs, dispatch } = useContext(UserContext);

    useEffect(() => {
        if (load.type === "getting") {
            console.log('getting');
            const promise1 = async (user_id, token) => { 
                try {
                    const res = await fetch(`${BASE_URL}/device/${user_id}`, {
                        method: "GET",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'authorization': token
                         }});
                    const json = await res.json();

                   await new Promise((resolve) => {
                        if (json.length > 0) {
                            console.log(json);
                            
                            return resolve(
                               dispatch({type: "SET_DEVICE_ARR", payload: json})
                            )
                        }
                       
                   })

                } catch (error) {
                    console.error(error);
                } 
        }
            promise1(load.user_id, load.token);
        }
        return () => {};
    }, [load])

  
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

    // const getAll = () => {
    //     return promise1(load.user_id, load.token);
    // }

   return { allDevs };
}

export default useGetDeviceInfo;