import { useContext } from 'react';
import BASE_URL from './../constants';
import Store from '../contexts/Store';

const useManageItem = () => {
    const { user, med, medsArr, dispatch } = useContext(Store);
    const url = `${BASE_URL}/medicine`;

    const getAllMeds = async () => {
        try {
            const res = await fetch(`${url}/${user.id}`, {
                medthod: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authorization: user.token,
                },
            });

            const json = await res.json();

            await new Promise((resolve) => {
                console.log(json);

                return resolve(
                    dispatch({
                        type: 'SET_MEDS',
                        json,
                    }),
                );
            });
        } catch (error) {
            console.error(error);
        }
    };

    const getMedOne = async (id) => {
        try {
            const res = await fetch(`${url}/medOne/${id}`, {
                medthod: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authorization: user.token,
                },
            });
            const json = await res.json();

            await new Promise((resolve) => {
                return resolve(
                    dispatch({
                        type: 'GET_MED',
                        payload: {
                            id: json.id,
                            name: json.name,
                            user_id: user.id,
                            description: json.description,
                            prescriptionNumber: json.prescriptionNumber,
                            doctor: json.doctor,
                            pharmacy: json.pharmacy,
                            size: json.size,
                            refillLength: json.refillLength,
                        },
                    }),
                );
            });
        } catch (error) {
            console.error(error);
        }
    };

    const addMed = async (search) => {
        console.log(search);
        try {
            const res = await fetch(`${url}/addMed`, {
                method: 'POST',
                body: JSON.stringify({
                    name: search.name,
                    user_id: user.id,
                    description: search.description,
                    prescriptionNumber: search.prescriptionNumber,
                    doctor: search.doctor,
                    pharmacy: search.pharmacy,
                    size: search.size,
                    refillLength: search.refillLength,
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authorization: user.token,
                },
                credentials: 'same-origin',
            });

            const json = await res.json();
            await new Promise((resolve) => {
                console.log(json);

                return resolve(
                    dispatch({
                        type: 'SET_MED',
                        payload: {
                            id: json._id,
                            name: json.name,
                            user_id: user.id,
                            description: json.description,
                            prescriptionNumber: json.prescriptionNumber,
                            doctor: json.doctor,
                            pharmacy: json.pharmacy,
                            size: json.size,
                            refillLength: json.refillLength,
                            finished: false,
                        },
                    }),
                );
            });
        } catch (error) {
            console.error(error);
        }
    };

    const addRefill = async (formInfo) => {
        try {
            const res = await fetch(`${url}/addRefill/${formInfo.med_id}`, {
                method: 'POST',
                body: JSON.stringify({
                    med_id: formInfo.med_id,
                    date: formInfo.date,
                    details: formInfo.details,
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authorization: user.token,
                },
                credentials: 'same-origin',
            });

            const json = await res.json();
            await new Promise((resolve) => {
                console.log(json);
                return resolve(
                    dispatch({
                        type: 'ADD_REFILL',
                        payload: {
                            _id: json._id,
                            med_id: json.med_id,
                            date: json.date,
                            details: json.details,
                        },
                    }),
                );
            });
        } catch (error) {
            console.error(error);
        }
    };
    const getRefills = async (medId) => {
        try {
            const res = await fetch(`${url}/getRefill/${medId}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authorization: user.token,
                },
            });
            const json = await res.json();
            await new Promise((resolve) => {
                console.log(json);

                return resolve(
                    dispatch({
                        type: 'SET_REFILLS',
                        payload: json,
                    }),
                );
            });
        } catch (error) {
            console.error(error);
        }
    };
    const addMalfunction = () => {};

    const finish = () => {};

    return {
        med,
        medsArr,
        getAllMeds,
        getMedOne,
        addMed,
        addRefill,
        getRefills,
        addMalfunction,
        finish,
    };
};

export default useManageItem;
