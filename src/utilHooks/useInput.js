import { useState } from 'react';

const useInput = (init) => {
    const [value, setValue] = useState(init)


  
    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: e => {
                setValue( e.target.value);
            }
        }
    }
}

export default useInput;