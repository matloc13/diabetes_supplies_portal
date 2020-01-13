import React, { useState} from 'react';
import Form from './../components/form/Form';
const Gateway = () => {
    const [formType, setformType] = useState("welcome");

    const handleClick = (e) => {
        e.persist();
        switch (e.target.id) {
            case "btn-login":
                return setformType("login");
            case "btn-create":
                return setformType("create");
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
                    <nav>
                        <button
                            id="btn-login"
                            onClick={handleClick}>
                            Login
                        </button>
                        <button
                            id="btn-create"
                            onClick={handleClick}>                        
                            Create Account
                        </button>
                    </nav>
                </section>
        }
      {
        formType === "login" &&
            <Form 
                formType={formType}
            />
      }
      {
          formType === "create"  &&
            <Form
                formType={formType}
            />
      }
    </main>
  )
}
export default Gateway;