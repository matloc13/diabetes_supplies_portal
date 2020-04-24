import { useEffect, useState, useContext } from 'react';
import BASE_URL from './../constants';
import Store from '../contexts/Store';

const useGetDeviceItems = (deviceId) => {
    const { user } = useContext(Store);
    const [devices, setDevices] = useState({});

    const promChanges = async () => {
        try {
            const res = await fetch(`${BASE_URL}/device/${deviceId}/change`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authorization: user.token,
                },
            });

            const json = await res.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    };

    const promFailures = async () => {
        try {
            const res = await fetch(`${BASE_URL}/device/${deviceId}/failure`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authorization: user.token,
                },
            });
            const json = await res.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    };

    const promAquired = async () => {
        try {
            const res = await fetch(`${BASE_URL}/device/${deviceId}/aquire`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authorization: user.token,
                },
            });

            const json = await res.json();
            return json;
        } catch (error) {
            return error;
        }
    };

    const getAll = async () => {
        const changes = await promChanges();
        const failures = await promFailures();
        const aquires = await promAquired();

        await new Promise((resolve) => {
            if (changes && failures && aquires) {
                return resolve(
                    setDevices({
                        ...devices,
                        changes,
                        failures,
                        aquires,
                    })
                );
            }
        });
    };

    useEffect(() => {
        if (deviceId) {
            getAll();
        }
        return () => {};
    }, [deviceId]);

    return { devices };
};

export default useGetDeviceItems;
