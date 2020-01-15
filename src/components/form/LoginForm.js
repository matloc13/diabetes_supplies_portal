import React, { useEffect, useState } from 'react';
import useInput from '../../utilHooks/useInput';
import useAuth from '../../utilHooks/useAuth';
import './_form.scss';

const LoginForm = ({formType}) => {
    
const { value:fName, bind:bindfName, reset:resetfName } = useInput('');
const { value:lName, bind:bindlName, reset:resetlName } = useInput('');
const { value:age, bind:bindage, reset:resetage } = useInput('');
const { value:bDate, bind:bindbDate, reset:resetbDate } = useInput('');
const { value:password, bind:bindpassword, reset:resetpassword } = useInput('');
const { value:email, bind:bindemail, reset:resetemail } = useInput('');
  
    const [submitting, response, handleCreate, handleLogin] = useAuth();
    const [formInfo, setformInfo] = useState(null);
    // const [isMounted, setIsMounted] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        switch (formType) {
            case "create":
                console.dir(e)
                resetfName();
                resetlName();
                resetage();
                resetbDate();
                resetpassword();
                resetemail();
                return handleCreate(e, formInfo);
            case "login":
                resetfName();
                resetlName();
                resetage();
                resetbDate();
                resetpassword();
                resetemail();
                return handleLogin(e, formInfo);
            default:
                throw new Error('did not submit');
        }
  }
  useEffect(() => {
        // console.log(email || firstName || password);
        if (email || fName || lName || age || bDate || password) {
            if (formType === "create") {
                setformInfo( {...formInfo,
                    email,
                    fName,
                    lName,
                    age,
                    bDate,
                    password
                  }
                )
          } else {
            setformInfo( {...formInfo,
                email,
                password
              }
            )
          }
        }
      return () => {

      };
  }, [ email, fName, lName, age, bDate, password, formType, response ]);//eslint-disable-line

//   console.log(formType); 
  return (

        <form onSubmit={handleSubmit}>
            {
                submitting &&
                <h1>Submitting</h1>
            }
           
            {   // create account component
                formType === "create" &&
                <>
                    <label htmlFor="firstName">
                        First Name
                        <input 
                            id="firstName" 
                            type="text"
                            {...bindfName}/>
                    </label>

                    <label htmlFor="lastName">
                        Last Name
                        <input 
                            id="lastName" 
                            type="text"
                            {...bindlName}/>
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
                            {...bindbDate}/>
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

           {    // login component
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

export default LoginForm;  