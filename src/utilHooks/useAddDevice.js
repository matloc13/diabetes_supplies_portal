import { useEffect, useState } from 'react';

const useAddDevice = () => {

    const [url, setUrl] = useState(null);
    const [submitForm, setSubmitForm] = useState({});
    const [submitting, setSubmitting] = useState("waiting");
    const [data, setData] = useState({});

    useEffect(() => {
        const ac = new AbortController();
        const signal = ac.signal;
        const handleAdd = async () => {
            console.log(submitForm);
            
            setSubmitting("inaction");
            try {
                const res = await fetch(`${url}/${submitForm.user_id}`, {

                    method: "POST",
                    body: JSON.stringify({
                        user: submitForm.user_id,
                        deviceName: submitForm.device,
                        brand: submitForm.brand,
                        model: submitForm.model,
                        serialNumber: submitForm.serialNumber,
                        userSpec: submitForm.userSpec
                    }),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                        'authorization': `${submitForm.token}`,
                    },
                    credentials: 'same-origin',
                    signal

                });
    
                const json = await res.json();
    
                await new Promise((resolve) => {
                    
                    setSubmitting("finished")
                    return resolve(
                        setData(json)
                    )
                })
                
            } catch (error) {
                console.error(error);               
            }
            finally {
                setSubmitting("waiting")
            }

        }
        handleAdd();
        return () => {
            ac.abort();
        };
    }, [url])








    return [ { data, submitting }, setUrl , setSubmitForm];
}

export default useAddDevice;