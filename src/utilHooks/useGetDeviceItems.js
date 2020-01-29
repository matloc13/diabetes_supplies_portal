import { useEffect, useState, useContext } from 'react';
import BASE_URL from './../constants';
import BASE_URL_LOCAL from './../constantsL';
import UserContext from './../contexts/userContext';

const baseUrl = BASE_URL_LOCAL || BASE_URL;

const useGetDeviceItems = (device_id) => {

    const { user } = useContext(UserContext);
    const [devices, setDevices] = useState({});

    useEffect(() => {
        if (device_id) {
            getAll()
        }
        return () => {};
    }, [device_id])


    const promChanges = async () => { 
        try {
            const res = await fetch(`${baseUrl}/device/${device_id}/change`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': user.token
                }});

                const json = await res.json();
                return json;

        } catch (error) {
             console.error(error);
             
        }
    }

    const promFailures = async () => {
        try {
            const res = await fetch(`${baseUrl}/device/${device_id}/failure`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': user.token
                }
            });
            const json = await res.json();
            return json;

        } catch (error) {
            console.error(error);
            
        }
    }

    const promAquired = async () => {
        try {
            const res = await fetch(`${baseUrl}/device/${device_id}/aquire`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': user.token
                }
            });

            const json = await res.json();
            return json;
            
        } catch (error) {
            return error
        }
    }

    const getAll = async () => {
        const changes = await promChanges();
        const failures = await promFailures();
        const aquires = await promAquired();

        await new Promise((resolve) => {
            if (changes && failures && aquires ) {
                return resolve(
                        setDevices({
                            ...devices, 
                            changes,
                            failures,
                            aquires
                        })
                    )
            }
        })
  
    }

    return { devices };
}

export default useGetDeviceItems;