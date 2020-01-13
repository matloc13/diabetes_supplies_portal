import React from 'react';
const GatewayNav = ({handleClick, formType}) => {
    return (
        <nav>
            {
            formType === "welcome" &&
            <>
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
            </>
            }
            {
                formType !== "welcome" &&
                <button
                    id="btn-back-welcome"
                    onClick={handleClick}>
                back
                </button>
            }
                    
        </nav>
  )
}
export default GatewayNav;