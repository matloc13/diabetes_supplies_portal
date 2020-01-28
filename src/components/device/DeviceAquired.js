import React, { useState } from 'react';
import NewItem from './../newItem/NewItem';
import ItemForm from './../form/ItemForm';

const DeviceAquired = ({deviceId, aquired}) => {

    const [formReveal, setFormReveal] = useState(false);

    const handleClick = () => {
        return setFormReveal(true)
    }

    return (
        <>
        <article className="device-add-item">
            <h2>Supplies Aquired</h2>
            <NewItem
                itemType="aquired"
                deviceId={deviceId}
                handleClick={handleClick}
             />
            <ul>
                {
                    aquired.map((ele, i) => {
                        return (
                            <li key={i} className="item">
                                <h3>{ele.item}</h3>
                                <span>{ele.date.replace(/T.*$/g, "")}</span>
                                <div><p>{ele.note}</p></div>
                            </li>
                        )
                    })
                }
            </ul>
            <b className="space"></b>
        </article>
           {
            formReveal  &&
                <ItemForm
                    formType={"aquired"}
                    reveal={setFormReveal}
                    deviceId={deviceId}
                />
        }
        </>
    )
}
export default DeviceAquired;