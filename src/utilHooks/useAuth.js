import { useState, useContext } from 'react';
import BASE_URL from '../constants';
import UserContext from '../contexts/userContext';


const useAuth = () => {
    const [ submitting, setSubmitting ] = useState(false);
    const [ response, setResponse ] = useState({});
    const [getting, setGetting] = useState("waiting");
    const { dispatch } = useContext(UserContext);
  
    const handleCreate = ( form) => {
        // e.persist();
        execCreate(form)
    }

    const handleLogin = ( form) => {
        // e.persist();
        execLogin(form)
    }

    const handleUpdateUser = (form) => {
        execUpdateuser(form);
    }

        const execCreate = async (form) => {
            try {
                setSubmitting(true);
                const res = await fetch(`${BASE_URL}/user/create`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: form.email,
                        firstName: form.firstName,
                        lastName: form.lastName,
                        userName: form.userName,
                        age: form.age,
                        birthDate: form.birthDate,
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
                                userName: json.userName,
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
                    credentials: 'include',
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
                                userName: json.user.userName,
                                age: json.user.age,
                                birthDate: json.user.birthDate.replace(/T.*$/g, ""),
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
                    console.log(response);
                    
                }
            }
        }

        const execUpdateuser = async (form) => {
            try {
                const res = await fetch(`${BASE_URL}/user/${form.user_id}/update`, {
                    method: "PUT",
                    body: JSON.stringify(),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': form.token
                    }
                });
                const json = await res.json();
                await new Promise((resolve) => {
                    console.log(json);
                    
                    return resolve(
                        dispatch({
                            type: "UPDATE_USER",
                            payload: {
                                firstName: json.firstName,
                                lastName: json.lastName,
                                userName: json.userName,
                                age: json.age,
                                birthDate: json.birthDate.replace(/T.*$/g, "")
                            }
                        })
                    )
                })
            } catch (error) {
                console.error(error);
            }
        }

    return [submitting, handleCreate, handleLogin, getting,  handleUpdateUser];
}
export default useAuth;
