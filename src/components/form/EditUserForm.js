import React, {useState, useEffect, useContext} from 'react';
// import useInput from './../../utilHooks/useInput';
import useAuth from './../../utilHooks/useAuth';
import UserContext from './../../contexts/userContext';




    const init = {
        firsName: " ",
        lastName: " ",
        userName: " ",
        age: 0,
        birthDate: " "
    }
const EditUserForm = () => {
    const {user} = useContext(UserContext);

    const handleChange = (e) => {
        setValues({...values, [e.target.id]: e.target.value})
    }

    const [submitting, response, handleCreate, handleLogin, getting,  handleUpdateUser] = useAuth();

    const [formInfo, setFormInfo] = useState(null);
    const [values, setValues] = useState(init)
    useEffect(() => {
        setValues({
            ...values,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            age: user.age,
            birthDate: user.birthDate,
        })
        return () => {};
    }, [user])
   

    useEffect(() => {
        setFormInfo({
            ...formInfo,
            firsName: values.firstName,
            lastName: values.lastName,
            userName: values.userName,
            age: values.age,
            birthDate: values.birthDate,
            token: user.token,
            user_id: user.user_id
        })
        return () => {};
    }, [values])//eslint-disable-line

    const handleSubmit = () => {
       setValues(init)
        return handleUpdateUser(formInfo);
        
    }
    return (
        <form onSubmit={handleSubmit}>

                <fieldset className="field-label">
                    <input 
                        id="firstName" 
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}/>
                    <label htmlFor="firstName" className="label-style">
                       <span className="content-style">First Name</span> 
                    </label>
                </fieldset>
                   
                <fieldset className="field-label">
                    <input 
                        id="lastName" 
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}/>
                    <label htmlFor="lastName" className="label-style">
                       <span className="content-style">Last Name</span> 
                    </label>
                </fieldset>
                <fieldset className="field-label">
                    <input 
                        id="userName"
                        type="text"
                        name="userName"
                        value={values.userName}
                        onChange={handleChange}/>
                    <label htmlFor="userName" className="label-style">
                        <span className="content-style">Username</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        id="age" 
                        name="age"
                        type="text"
                        value={values.age}
                        onChange={handleChange}/>
                    <label htmlFor="age" className="label-style">
                        <span className="content-style">Age</span>
                    </label>

                </fieldset>
                 
                <fieldset className="field-label">
                    <input 
                        id="birthDate" 
                        name="birthDate"
                        type="date"
                        value={values.birthDate}
                        onChange={handleChange}/>
                    <label htmlFor="birthDate" className="label-style">
                        <span className="content-style">Birth Date</span>                      
                    </label>
                </fieldset>

                <fieldset className="field-label">
                        <input 
                            type="submit" 
                            name="submit"
                            value={"edit profile" }/>
                        <label htmlFor="submit"></label>
                    </fieldset>
        </form>
    )
}
export default EditUserForm;