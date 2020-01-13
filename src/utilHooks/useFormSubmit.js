import { useState } from 'react';
import BASE_URL from './../constants';
const useFormSubmit = () => {
    const [submitting, setSubmitting] = useState(false);
    const [response, setResponse] = useState({});

    const handleCreate = (e, form) => {
        e.persist()
        console.dir(e)
        console.log(form);
        execCreate(form)
        
    }

const execCreate = async (form) => {
    try {
        setSubmitting(true);
        const res = await fetch(`${BASE_URL}/user/create`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Accept': 'application/json, text/plain,*/*',
                'Content-Type': 'application/json'
            }
        });
    
        const json = await res.json();
        await new Promise(resolve => {
            if (json) {
                setResponse(json);
            }
        })
        
    } catch (error) {
        console.error(error);
        
    } finally {
        if (response) {
            setSubmitting(false);
        }
       
    }
  


}

  return [submitting, response, handleCreate];
}
export default useFormSubmit;