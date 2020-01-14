import { useState, useContext } from 'react';
import BASE_URL from './../constants';
import UserContext from './../contexts/userContext';

const useFormSubmit = () => {
    const [submitting, setSubmitting] = useState(false);
    const [response, setResponse] = useState({});
    const {user, dispatch} = useContext(UserContext);

    const handleCreate = (e, form) => {
        e.persist()
        // console.dir(e)
        // console.log(form);
        execCreate(form)
    }

    const handleLogin = (e, form) => {
        e.persist();
        execLogin(form)
    }

        const execCreate = async (form) => {
            // console.log(form);
            try {
                setSubmitting(true);
                const res = await fetch(`${BASE_URL}/user/create`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: form.email,
                        firstName: form.fName,
                        lastName: form.lName,
                        age: form.age,
                        birthDate: form.bDate,
                        password: form.password
                    }),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    }
                });
            
                const json = await res.json();
                await new Promise(resolve => {
                    console.log(json);
                    
                    if (json) {
                        setResponse(json)
                        return resolve(dispatch({
                            type: "SET_USER",
                            payload: {
                                email: json.email,
                                firstName: json.firstName,
                                lastName: json.lastName,
                                age: json.age,
                                birthDate: json.birthDate,
                                password: json.password,
                                isAuthenticated: true
                            }
                        }));
                    }
                });
            } catch (error) {
                console.error(error);
            } finally {
                if (response) {
                    setSubmitting(false);
                }
            }
        }

        const execLogin = async (form) => {
            try {
                setSubmitting(true);
                const res = await fetch(`${BASE_URL}/user/login`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: form.email,
                        password: form.password
                    }),
                    headers: {
                        'Accept': 'application/json, text/html',
                        'Content-Type': 'application/json'
                    }
                });
                const json = await res.json();
                await new Promise((resolve) => {
                    setResponse(json)
                    console.log(json);
                    
                    return resolve(
                        dispatch({ 
                            type: "SET_USER", 
                            payload: {
                                email: json.email,
                                firstName: json.firstName,
                                lastName: json.lastName,
                                age: json.age,
                                birthDate: json.birthDate,
                                password: json.password,
                                isAuthenticated: true
                            }
                        })
                    )
                })
            } catch (error) {
                console.error(error);
            } finally {
                if (response) {
                    setSubmitting(false);
                }
            }
        }

  return [submitting, response, handleCreate, handleLogin];
}
export default useFormSubmit;