import React from 'react';
import NewItem from './../newItem/NewItem';
const DeviceAquired = ({deviceId}) => {
    return (
        <article>
            <h2>device arrivals</h2>
            <NewItem
                itemType="device aquired"
                deviceId={deviceId}
             />
            <ul>
                <li></li>
            </ul>
        </article>
    )
}
export default DeviceAquired;