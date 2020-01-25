import React, { useState } from 'react';
import ItemForm from './../form/ItemForm';
const NewItem = ({itemType, deviceId}) => {

    const [formReveal, setFormReveal] = useState(false)
    console.log({itemType, deviceId});
     
    const handleClick = () => {
        return setFormReveal(true)
    }
    return (
        <article className="btn-container">
            <label htmlFor="btn-new">
                <button 
                    id="btn-new"
                    className={`btn-item ${itemType}`}
                    onClick={handleClick}>
                    {`add new ${itemType}`}
                </button>
            </label>

            {
                formReveal  &&
                    <ItemForm
                        formType={itemType}
                        reveal={setFormReveal}
                        deviceId={deviceId}
                    />
            }
        </article>
  )
}
export default NewItem;