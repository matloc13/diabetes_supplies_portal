import { useState } from 'react';
import BASE_URL from './../constants';
const useManageItem = () => {
    const [meds, setMeds] = useState([{}]);
    const url = `${BASE_URL}/medicine`

    const getAllMeds =  async (search) => {
        try {
            const res = await fetch(`${url}/${search.user_id}`, {
                medthod: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': search.token
                },
                credentials: 'includes'
            });
    
            const json = await res.json();
    
            setMeds(json);
            
        } catch (error) {
            console.error(error);
        }
    }

    const getMedOne = async (search) => {
        try {
            const res = await fetch(`${url}/`)
        } catch (error) {
            
        }
    }

    const addMed = async (search) => {
        try {
            const res = await fetch(`${url}/addMed`, {
                method: "POST",
                body: JSON.stringify(search.med),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': search.token
                }
            });
    
            const json = await res.json();
            await new Promise((resolve) => {
                return resolve(
                    setMeds([...meds,{json}])
                )
            });
        } catch (error) {
            console.error(error);
        }
    
    }

    const addMalfunction = () => {

    }

    const finish = () => {

    }


    return {
        meds,
        getAllMeds,
        getMedOne,
        addMed,
        addMalfunction,
        finish
    }
}

export default useManageItem;