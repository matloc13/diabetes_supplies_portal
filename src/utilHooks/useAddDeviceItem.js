import { useContext } from 'react';
import BASE_URL from './../constants';
import UserContext from './../contexts/userContext';

const useAddDeviceItem = () => {

    const { user, device, dispatch } = useContext(UserContext);

    const addItem = (form, action) => {
        switch (action) {
            case "change":
                return execChange(form);
            case "aquire":
                return execAquire(form);
            case "failure":
                return execFailure(form);
            default:
                return;
        }
    }


    const execChange = async (form) => {
        try {
            const res = await fetch(`${BASE_URL}/device/change`, {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    'Accept': 'application/json, text/html',
                    'Content-Type': 'application/json'
                }
            });
    
            const json = await res.json();
            await new Promise((resolve) => {
                return resolve(
                    dispatch({
                        type: "CREATE_DEVICE", 
                        payload: {
                            json
                    }})
                )
            })
            
        } catch (error) {
            console.error(error);  
        }
       
    }

    const execAquire = () => {

    }

    const execFailure = () => {
        
    }






  return { addItem }
}

export default useAddDeviceItem;