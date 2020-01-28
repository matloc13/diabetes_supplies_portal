import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPortrait, faIdCardAlt, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

const GatewayNav = ({handleClick, formType}) => {

    return (
        <nav className="gateway ">
            {
            formType === "welcome" &&
            <>
                <button
                    id="btn-login"
                    onClick={handleClick}>
                <FontAwesomeIcon icon={faIdCardAlt} size="lg"/>
                </button>

                <button
                    id="btn-create"
                    onClick={handleClick}>                    
                    <FontAwesomeIcon icon={faPlus}/>  <FontAwesomeIcon icon={faPortrait} size="lg"/>           
                </button>
            </>
            }
            {
                formType !== "welcome" &&
                <button
                    id="btn-back-welcome"
                    onClick={handleClick}>
                <FontAwesomeIcon icon={faDoorOpen} size="2x"/>
                </button>
            }
                    
        </nav>
  )
}
export default GatewayNav;