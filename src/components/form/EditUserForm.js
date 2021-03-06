import React, { useState, useEffect, useContext } from 'react';
import useAuth from './../../utilHooks/useAuth';
import Store from '../../contexts/Store';

const init = {
    firsName: ' ',
    lastName: ' ',
    userName: ' ',
    birthDate: ' ',
};

const EditUserForm = () => {
    const { user } = useContext(Store);

    const { handleUpdateUser } = useAuth();

    const [formInfo, setFormInfo] = useState(null);
    const [values, setValues] = useState(init);

    const handleChange = (e) => {
        e.persist();
        setValues({ ...values, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        setValues({
            ...values,
            firstName: user.firstName || ' ',
            lastName: user.lastName || ' ',
            userName: user.userName || ' ',
            birthDate: user.birthDate.replace(/T.*$/g, ''),
        });
        return () => {};
    }, [user]); //eslint-disable-line

    useEffect(() => {
        setFormInfo({
            ...formInfo,
            firsName: values.firstName,
            lastName: values.lastName,
            userName: values.userName,
            birthDate: values.birthDate,
            token: user.token,
            user_id: user.id,
        });
        return () => {};
    }, [values]); //eslint-disable-line

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues(init);
        return handleUpdateUser(formInfo);
    };
    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="field-label">
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                />
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
                    onChange={handleChange}
                />
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
                    onChange={handleChange}
                />
                <label htmlFor="userName" className="label-style">
                    <span className="content-style">Username</span>
                </label>
            </fieldset>

            <fieldset className="field-label">
                <input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={values.birthDate}
                    onChange={handleChange}
                />
                <label htmlFor="birthDate" className="label-style">
                    <span className="content-style">Birth Date</span>
                </label>
            </fieldset>

            <fieldset className="field-label">
                <input type="submit" name="submit" value={'edit profile'} />
                <label htmlFor="submit" />
            </fieldset>
        </form>
    );
};
export default EditUserForm;
