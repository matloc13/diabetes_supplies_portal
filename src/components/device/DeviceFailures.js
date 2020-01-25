import React from 'react';
import NewItem from './../newItem/NewItem';
const DeviceFailures = ({deviceId}) => {
    return (
        <article>
            <h2>device failures</h2>
            <NewItem
                itemType="device failure"
                deviceId={deviceId}
                 />
            <ul>
                <li></li>
            </ul>
        </article>
    )
}
export default DeviceFailures;