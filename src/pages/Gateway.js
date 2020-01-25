import React, { useState } from 'react';
import LoginForm from '../components/form/LoginForm';
import GatewayNav from './../components/nav/gatewayNav';
// import useAuth from './../utilHooks/useAuth';

const Gateway = () => {
    // const [submitting, response, handleCreate, handleLogin, getting, handleGetUser] = useAuth();

    // useEffect(() => {
    //     handleGetUser();

    // }, [])

    const [formType, setformType] = useState("welcome");

    const handleClick = (e) => {
        e.persist();
        switch (e.target.id) {
            case "btn-login":
                return setformType("login");
            case "btn-create":
                return setformType("create");
            case "btn-back-welcome":
                return setformType("welcome");
            default:
                return;
        }
    }

  return (
    <main>
        {
            formType === "welcome" && 
                <section>
                    <h3>welcome to diabetes supply manager</h3>
                    <GatewayNav
                        handleClick={handleClick}
                        formType={formType}
                     />
                </section>
        }
      {
        formType === "login" &&
        <>
            <GatewayNav
                handleClick={handleClick}
                formType={formType}/>
            <LoginForm 
                formType={"login"}/>
        </>
      }
      {
        formType === "create"  &&
        <>
            <GatewayNav
                handleClick={handleClick}
                formType={formType}/>   
            <LoginForm
                formType={"create"}/>
           
        </>
      }
    </main>
  )
}
export default Gateway;