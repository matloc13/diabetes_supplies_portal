import { useState } from 'react';

const useInput = (init) => {
    const [value, setValue] = useState(init);
    const handleChange = (e) => {
        e.persist();
        return setValue(e.target.value);
    };

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value: value,
            onChange: (e) => {
                // setValue( e.target.value )
                handleChange(e);
            },
        },
    };
};

export default useInput;
