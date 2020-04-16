import { useState, useEffect } from 'react';
import BASE_URL from './../constants';

const useAddDeviceItem = () => {
    const [data, setData] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({});
    const [url, setUrl] = useState('');
    const execItemOp = async (url) => {
        setSubmitting(true);
        try {
            console.log('posting change');
            const res = await fetch(`${BASE_URL}/device/${url}`, {
                method: `${form.method}`,
                body: JSON.stringify({
                    user_id: form.user_id,
                    device_id: form.device_id,
                    date: form.date,
                    item: form.item,
                    note: form.note,
                }),
                headers: {
                    Accept: 'application/json, text/html',
                    'Content-Type': 'application/json',
                    authorization: form.token,
                },
                credentials: 'same-origin',
            });

            const json = await res.json();
            await new Promise((resolve) => {
                console.log(json);
                return resolve(setData({ ...data, json }));
            });
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        // console.log(form);
        if (form.device_id) {
            execItemOp(url);
        }
        return () => {};
    }, [url]);

    return [{ data, submitting }, setForm, setUrl];
};

export default useAddDeviceItem;
