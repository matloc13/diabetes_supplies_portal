import React, { useEffect, useState } from 'react';
import useInput from './../../utilHooks/useInput';
import useFormSubmit from './../../utilHooks/useFormSubmit';
const Form = ({formType}) => {
const { value:firstName, bind:bindfirstName, reset:resetfirstName } = useInput('');
const { value:lastName, bind:bindlastName, reset:resetlastName } = useInput('');
const { value:age, bind:bindage, reset:resetage } = useInput('');
const { value:birthDate, bind:bindbirthDate, reset:resetbirthDate } = useInput('');
const { value:password, bind:bindpassword, reset:resetpassword } = useInput('');
const { value:email, bind:bindemail, reset:resetemail } = useInput('');
  
    // const {value, bind, reset } = useInput();
    const [submitting, response, handleCreate] = useFormSubmit();
    const [formInfo, setformInfo] = useState({
        email: " ",
        firstName: " ",
        password: " "
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        switch (formType) {
            case "create":
                console.dir(e)
                resetfirstName();
                resetpassword();
                resetemail();
                return handleCreate(e, formInfo);
            case "login":
                return;
            default:
                throw new Error('did not submit');
        }
  }

  useEffect(() => {
        console.log(email || firstName || password);
        if (email || firstName || password) {
            if (formType === "create") {
                setformInfo( {...formInfo,
                    email: email,
                    firstName: firstName,
                    password: password
                  }
                )
          } else {
            setformInfo( {...formInfo,
                firstName: firstName,
                password: password
              }
            )
          }
        }
      return () => {
          
      };
  }, [firstName, password, email, formType]);

  console.log(formType);
  
  return (
        <form onSubmit={handleSubmit}>
           
            {
                formType === "create" &&
                <>
                    <label htmlFor="firstName">
                        First Name
                        <input 
                            id="firstName" 
                            type="text"
                    {...bindfirstName}/>
                    </label>

                    <label htmlFor="lastName">
                        Last Name
                        <input 
                            id="lastName" 
                            type="text"
                            {...bindlastName}/>
                    </label>

                    <label htmlFor="email">
                        Email
                        <input 
                            id="email"
                            type="email"
                            {...bindemail}/>
                    </label>

                    <label htmlFor="age">
                        Age
                    <input 
                        id="age" 
                        type="text"
                        {...bindage}/>
                    </label>

                    <label htmlFor="birthDate">
                        Birth Date
                        <input 
                            id="birthDate" 
                            type="date"
                            {...bindbirthDate}/>
                    </label>
                </>
            }
           {
               formType === "login" &&
               <>
                    <label htmlFor="email">
                        {formType} email
                        <input 
                            id="email" 
                            type="text"
                            {...bindemail}/>
                    </label>

                    <label htmlFor="password">
                        {formType} password
                        <input 
                            id="firstName" 
                            type="password"
                            {...bindpassword}/>
                    </label>

                    <label htmlFor="submit">
                        <input 
                            type="submit" 
                            value={formType }/>
                    </label>
              </>
           }
         
        </form>
  )
}
export default Form;  