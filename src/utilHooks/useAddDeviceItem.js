import { useState, useEffect } from 'react';
import BASE_URL from './../constants';


const useAddDeviceItem = () => {
    const [data, setData] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({});
    const [url, setUrl] = useState('');

    useEffect(() => {
        console.log(form);
        
        if (form.device_id) {
            const execItemOp = async () => {
                setSubmitting(true);
            try {
                console.log('posting change');
                
                const res = await fetch(`${BASE_URL}/device/${url}`, {
                    method: "POST",
                    body: JSON.stringify({
                        user_id: form.user_id,
                        device_id: form.device_id,
                        date: form.date,
                        item: form.item,
                        note: form.note
                    }),
                    headers: {
                        'Accept': 'application/json, text/html',
                        'Content-Type': 'application/json',
                        'authorization': form.token
                    },
                    credentials: 'same-origin'
                });
        
                const json = await res.json();
                await new Promise((resolve) => {
                    console.log(json);
                    return resolve(setData({...data, json}))
                })
            } catch (error) {
                console.error(error);  
            } finally {
                setSubmitting(false);
            }
        }
        execItemOp();
        }
   
        return () => {};
    }, [url]) //eslint-disable-line

  return [ { data, submitting }, setForm, setUrl ]
}

export default useAddDeviceItem;