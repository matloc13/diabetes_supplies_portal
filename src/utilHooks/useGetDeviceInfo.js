import { useEffect, useContext } from 'react';
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
        return () => {};
    }, [load])

  

   return { allDevs };
}

export default useGetDeviceInfo;