import { useEffect, useContext, } from 'react';
import BASE_URL from './../constants';
import UserContext from './../contexts/userContext';

const useGetDeviceInfo = (load) => {
    const { allDevs, dispatch } = useContext(UserContext);

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

        if (load.type === "getSingle") {
            const getSingle = async (device_id, token) => {
                try {
                    const res = await fetch(`${BASE_URL}/device/${device_id}/get`,{
                        method: "GET",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'authorization': token
                        }});
                    const json = await res.json();
                    await new Promise((resolve) => {
                        console.log(json);
                        return resolve(dispatch({
                            type: "SET_CUR_DEV",
                            payload: {
                                user_id: json.user_id,
                                _id: json._id,
                                deviceName: json.deviceName,
                                brand: json.brand,
                                model: json.model,
                                serialNumber: json.serialNumber,
                                userSpec: json.userSpec
                            }
                        }))
                    });
                } catch (error) {
                    console.error(error);
                }
            }
            getSingle(load.deviceId, load.token);
        }
        return () => {};
    }, [load])

  

   return { allDevs };
}

export default useGetDeviceInfo;