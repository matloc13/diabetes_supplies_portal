import React, { useEffect, useState } from 'react';
import useInput from './../../utilHooks/useInput';
import useFormSubmit from './../../utilHooks/useFormSubmit';
const Form = ({formType}) => {
    const {value, bind, reset } = useInput();
    const [submitting, response, handleCreate] = useFormSubmit();
    const [formInfo, setformInfo] = useState({
        email: " ",
        username: " ",
        password: " "
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        switch (formType) {
            case "create":
                console.dir(e)
                return handleCreate()
            case "login":
                return;
            default:
                throw new Error('did not submit');
        }
  }

  useEffect(() => {
        console.log(value);
        if (value) {
            if (formType === "create") {
                setformInfo( {...formInfo,
                    email: value.email,
                    username: value.username,
                    password: value.password
                  }
                )
          } else {
            setformInfo( {...formInfo,
                username: value.username,
                password: value.password
              }
            )
          }
        }
        
   
    
      return () => {
          
      };
  }, [value])

  console.log(formType);
  
  return (
        <form onSubmit={handleSubmit}>
            {
                formType === "create" &&
                    <label htmlFor="email">
                        add email
                        <input 
                            id="email"
                            type="email"
                            {...bind}/>
                    </label>
            }
            <label htmlFor="username">
                {formType} username
                <input 
                    id="username" 
                    type="text"
                    {...bind}/>
            </label>
            <label htmlFor="password">
                {formType} password
                <input 
                    id="username" 
                    type="password"
                    {...bind}/>
            </label>
            <label htmlFor="submit">
                <input 
                    type="submit" 
                    value={formType }/>
            </label>
        </form>
  )
}
export default Form;  