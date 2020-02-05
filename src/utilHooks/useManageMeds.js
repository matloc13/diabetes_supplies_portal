import { useContext } from 'react';
import BASE_URL from './../constants';
import UserContext from './../contexts/userContext';

const useManageItem = () => {
    const { user, med, medsArr, dispatch} = useContext(UserContext);
    const url = `${BASE_URL}/medicine`

    const getAllMeds =  async () => {
        try {
            const res = await fetch(`${url}/${user.id}`, {
                medthod: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': user.token
                }
            });
    
            const json = await res.json();
    
            await new Promise(resolve => {
                console.log(json);
                
                return resolve(
                    dispatch({
                        type: "SET_MEDS",
                        json
                    })
                )
            })
            
        } catch (error) {
            console.error(error);
        }
    }

    const getMedOne = async (id) => {
        try {
            const res = await fetch(`${url}/medOne/${id}`, {
                medthod: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': user.token
                },
                credentials: 'includes'
            })

            const json = await res.json();


            await new Promise(resolve => {
                return resolve(
                    dispatch({
                        type: "GET_MED",
                        payload: {
                            id: json.id,
                            name: json.name,
                            user_id: user.id,
                            description: json.description,
                            prescriptionNumber: json.prescriptionNumber,
                            doctor: json.doctor,
                            pharmacy: json.pharmacy,
                            size: json.size
                        }
                    })
                )
            })
        } catch (error) {
            console.error(error);
            
        }
    }

    const addMed = async (search) => {
        console.log(search);
        search = {
            name: search.name,
            user_id: user.id,
            description: search.description,
            prescriptionNumber: search.prescriptionNumber,
            doctor: search.doctor,
            pharmacy: search.pharmacy,
            size: search.size
        }
        try {
            const res = await fetch(`${url}/addMed`, {
                method: "POST",
                body: JSON.stringify(search),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': user.token
                }
            });
    
            const json = await res.json();
            await new Promise((resolve) => {
                console.log(json);
                
                return resolve(
                    dispatch({
                        type: "SET_MED",
                        payload: {
                            id: json._id,
                            name: json.name,
                            user_id: user.id,
                            description: json.description,
                            prescriptionNumber: json.prescriptionNumber,
                            doctor: json.doctor,
                            pharmacy: json.pharmacy,
                            size: json.size,
                            finished: false
                        }
                    })
                );
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
        med,
        medsArr,
        getAllMeds,
        getMedOne,
        addMed,
        addMalfunction,
        finish
    }
}

export default useManageItem;