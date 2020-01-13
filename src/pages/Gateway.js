import React, { useState} from 'react';
import Form from './../components/form/Form';
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
            <Form 
                formType={"login"}/>

            <GatewayNav
                        handleClick={handleClick}
                        formType={formType}/>
        </>
      }
      {
        formType === "create"  &&
        <>
            <Form
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