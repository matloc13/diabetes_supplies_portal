import { useState } from 'react';

const useInput = () => {
    const [value, setValue] = useState()
    const handleInput = (e) => {
        e.persist();
        setValue({[e.target.id]: e.target.value})

  }
    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: e => {
                setValue(e.target.value);
            }
        }
    }
}
export default useInput;