import { useState } from 'react';
const useHandleForm = () => {
    const [values, setValues] = useState({ '': '' });
    const [togVal, setTogVal] = useState(false);

    const toggle = (e) => {
        e.persist();
        setTogVal(!togVal);
    };
    const handleChange = (e) => {
        e.persist();
        setValues({ ...values, [e.target.id]: e.target.value });
    };
    const reset = () => {
        setValues({});
    };
    return { handleChange, toggle, values, togVal, reset };
};
export default useHandleForm;
