import React from 'react';
import NewItem from './../newItem/NewItem';
const DeviceAquired = ({deviceId, aquired}) => {
    return (
        <article className="device-add-item">
            <h2>device arrivals</h2>
            <NewItem
                itemType="device aquired"
                deviceId={deviceId}
             />
            <ul>
                {
                    aquired.map((ele, i) => {
                        return (
                            <li key={i}>
                                <h3>{ele.item}</h3>
                                <span>{ele.date}</span>
                                <p>{ele.note}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </article>
    )
}
export default DeviceAquired;