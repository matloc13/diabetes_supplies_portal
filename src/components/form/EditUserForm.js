import React, {useState} from 'react';
import useInput from './../../utilHooks/useInput';
const EditUserForm = () => {

    const { value:fName, bind:bindfName, reset:resetfName } = useInput('');
const { value:lName, bind:bindlName, reset:resetlName } = useInput('');
const { value:uName, bind:binduName, reset:resetuName } = useInput('');
const { value:age, bind:bindage, reset:resetage } = useInput('');
const { value:bDate, bind:bindbDate, reset:resetbDate } = useInput('');
// const { value:password, bind:bindpassword, reset:resetpassword } = useInput('');
// const { value:email, bind:bindemail, reset:resetemail } = useInput('');

    const [formInfo, setFormInfo] = useState(null)
    const handleSubmit = () => {
        
    }
    return (
        <form onSubmit={handleSubmit}>

                <fieldset className="field-label">
                    <input 
                        id="firstName" 
                        type="text"
                        name="firstName"
                        {...bindfName}/>
                    <label htmlFor="firstName" className="label-style">
                       <span className="content-style">First Name</span> 
                    </label>
                </fieldset>
                   
                <fieldset className="field-label">
                    <input 
                        id="lastName" 
                        type="text"
                        name="lastName"
                        {...bindlName}/>
                    <label htmlFor="lastName" className="label-style">
                       <span className="content-style">Last Name</span> 
                    </label>
                </fieldset>
                <fieldset className="field-label">
                    <input 
                        id="userName"
                        type="text"
                        name="userName"
                        {...binduName}/>
                    <label htmlFor="userName" className="label-style">
                        <span className="content-style">Username</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        id="age" 
                        name="age"
                        type="text"
                        {...bindage}/>
                    <label htmlFor="age" className="label-style">
                        <span className="content-style">Age</span>
                    </label>

                </fieldset>
                 
                <fieldset className="field-label">
                    <input 
                        id="birthDate" 
                        name="birthDate"
                        type="date"
                        {...bindbDate}/>
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