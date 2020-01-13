import { useState } from 'react';
const useFormSubmit = () => {
    const [submitting, setSubmitting] = useState(false);
    const [response, setResponse] = useState({});

    const handleCreate = (form) => {
        console.log(form);
        
    }



  return [submitting, response, handleCreate];
}
export default useFormSubmit;