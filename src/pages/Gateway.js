import React, { useState } from 'react';
import LoginForm from '../components/form/LoginForm';
import GatewayNav from './../components/nav/gatewayNav';
const Gateway = () => {

    
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
                    welcome to diabetes supply manager
                    <GatewayNav
                        handleClick={handleClick}
                        formType={formType}
                     />
                </section>
        }
      {
        formType === "login" &&
        <>
            <LoginForm 
                formType={"login"}/>
            <GatewayNav
                handleClick={handleClick}
                formType={formType}/>
        </>
      }
      {
        formType === "create"  &&
        <>
            <LoginForm
                formType={"create"}/>
            <GatewayNav
                handleClick={handleClick}
                formType={formType}/>
        </>
      }
    </main>
  )
}
export default Gateway;