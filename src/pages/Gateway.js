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
    <main className="profile-gateway">
        {
            formType === "welcome" && 
                <section>
                    <GatewayNav
                        handleClick={handleClick}
                        formType={formType}
                     />
                        <h3>Welcome to Medical supplies/devices manager</h3>
                        <p>an inventory generator for managing your medical package arrivals and id numbers for each package.  I use it to try my diabetes activities.  changing my insulin pump site and my cgm site.</p>
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