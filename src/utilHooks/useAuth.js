import { useState, useContext } from 'react';
import BASE_URL from '../constants';
import UserContext from '../contexts/userContext';

const useAuth = () => {
    const [ submitting, setSubmitting ] = useState(false);
    const [ response, setResponse ] = useState({});
    const [getting, setGetting] = useState("waiting");
    const { dispatch } = useContext(UserContext);
  
    const handleCreate = (e, form) => {
        e.persist();
        execCreate(form)
    }

    const handleLogin = (e, form) => {
        e.persist();
        execLogin(form)
    }

    const handleGetUser = () => {
        execGetuser();
    }

        const execCreate = async (form) => {
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
                    },
                    credentials: 'include'
                });
            
                const json = await res.json();
                await new Promise(resolve => {
                    console.log(json);
                    
                    if (json) {
                        setResponse(json);
                        setGetting("getting");
                        return resolve(dispatch({
                            type: "SET_USER",
                            payload: {
                                email: json.email,
                                firstName: json.firstName,
                                lastName: json.lastName,
                                age: json.age,
                                birthDate: json.birthDate,
                                password: json.password,
                                isAuthenticated: true,
                                id: json._id
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
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    credentials: 'same-origin'
                });
                const json = await res.json();
                await new Promise((resolve) => {
                    setResponse(json);
                    setGetting("getting");
                    console.log(json);
                    setGetting("finished")
                    return resolve(
                        dispatch({ 
                            type: "SET_USER", 
                            payload: {
                                email: json.user.email,
                                firstName: json.user.firstName,
                                lastName: json.user.lastName,
                                age: json.user.age,
                                birthDate: json.user.birthDate,
                                password: json.user.password,
                                isAuthenticated: true,
                                id: json.user._id,
                                token: json.token
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

        const execGetuser = async () => {
            try {
                const res = await fetch(`${BASE_URL}/`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    credentials: 'same-origin',

                });
                const json = await res.json();
                await new Promise((resolve) => {
                    if (json) {
                        return resolve(console.log('cookie set'))   
                    }
                })
            } catch (error) {
                console.error(error);
                
            }
           
        }

    return [submitting, response, handleCreate, handleLogin, getting, handleGetUser];
}
export default useAuth;