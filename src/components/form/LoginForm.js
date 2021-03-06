import React, { useEffect, useState, useRef } from 'react';
import useInput from '../../utilHooks/useInput';
import useAuth from '../../utilHooks/useAuth';
import './_form.scss';

const LoginForm = ({ formType }) => {
    let signal;
    const signalRef = useRef(signal);
    const { value: fName, bind: bindfName, reset: resetfName } = useInput('');
    const { value: lName, bind: bindlName, reset: resetlName } = useInput('');
    const { value: uName, bind: binduName, reset: resetuName } = useInput('');
    const { value: bDate, bind: bindbDate, reset: resetbDate } = useInput('');
    const { value: password, bind: bindpassword, reset: resetpassword } = useInput('');
    const { value: email, bind: bindemail, reset: resetemail } = useInput('');

    const { submitting, handleCreate, handleLogin, getting } = useAuth();
    const [formInfo, setformInfo] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (formType) {
            case 'create':
                console.dir(e);
                resetfName();
                resetlName();
                resetbDate();
                resetpassword();
                resetemail();
                resetuName();
                return handleCreate(formInfo);
            case 'login':
                resetfName();
                resetlName();
                resetbDate();
                resetpassword();
                resetemail();
                resetuName();
                return handleLogin(formInfo);
            default:
                throw new Error('did not submit');
        }
    };
    useEffect(() => {
        // console.log(email || firstName || password);
        if (email || fName || lName || bDate || password) {
            if (formType === 'create') {
                setformInfo({
                    ...formInfo,
                    email,
                    firstName: fName,
                    lastName: lName,
                    userName: uName,
                    birthDate: bDate,
                    password,
                });
            } else {
                setformInfo({ ...formInfo, email, password });
            }
        }
        return () => {};
    }, [email, fName, lName, bDate, password, formType]); //eslint-disable-line

    useEffect(() => {
        const ac = new AbortController();
        signalRef.current = ac.signal;

        return () => {
            if (getting === 'finished') {
                console.log('aborted fetch');

                return ac.abort();
            }
        };
    }, [getting]);

    //   console.log(formType);
    return (
        <form onSubmit={handleSubmit}>
            {submitting && <h1>Submitting</h1>}

            {
                // create account component
                formType === 'create' && (
                    <>
                        <fieldset className="field-label">
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                autoFocus
                                {...bindfName}
                            />
                            <label htmlFor="firstName" className="label-style">
                                <span className="content-style">First Name</span>
                            </label>
                        </fieldset>

                        <fieldset className="field-label">
                            <input id="lastName" type="text" name="lastName" {...bindlName} />
                            <label htmlFor="lastName" className="label-style">
                                <span className="content-style">Last Name</span>
                            </label>
                        </fieldset>

                        <fieldset className="field-label">
                            <input id={'userName'} type="text" name="userName" {...binduName} />
                            <label htmlFor="userName" className="label-style">
                                <span className="content-style">Username</span>
                            </label>
                        </fieldset>

                        <fieldset className="field-label">
                            <input id="email" name="email" type="email" {...bindemail} />
                            <label htmlFor="email" className="label-style">
                                <span className="content-style">Email</span>
                            </label>
                        </fieldset>

                        <fieldset className="field-label">
                            <input id="birthDate" name="birthDate" type="date" {...bindbDate} />
                            <label htmlFor="birthDate" className="label-style">
                                <span className="content-style">Birth Date</span>
                            </label>
                        </fieldset>

                        <fieldset className="field-label">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                {...bindpassword}
                            />
                            <label htmlFor="password" className="label-style">
                                <span className="content-style">{formType} password</span>
                            </label>
                        </fieldset>

                        <fieldset>
                            <input type="submit" value={formType} />
                            <label htmlFor="submit" />
                        </fieldset>
                    </>
                )
            }

            {
                // login component
                formType === 'login' && (
                    <>
                        <fieldset className="field-label">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="current-email"
                                {...bindemail}
                            />
                            <label htmlFor="email" className="label-style">
                                <span className="content-style">{formType} email</span>
                            </label>
                        </fieldset>

                        <fieldset className="field-label">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoFocus
                                autoComplete="current-password"
                                {...bindpassword}
                            />
                            <label htmlFor="password" className="label-style">
                                <span className="content-style">{formType} password</span>
                            </label>
                        </fieldset>
                        <fieldset className="field-label">
                            <input type="submit" name="submit" value={formType} />
                            <label htmlFor="submit" />
                        </fieldset>
                    </>
                )
            }
        </form>
    );
};

export default LoginForm;
