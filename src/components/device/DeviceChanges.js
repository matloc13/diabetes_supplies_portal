import React from 'react';
import NewItem from './../newItem/NewItem';


const DeviceChanges = ({deviceId}) => {

    return (
            <article>
                <h2>device changes</h2>
                <NewItem
                    itemType="device change"
                    deviceId={deviceId}
                    />               
                <ul>
                    <li></li>
                </ul>
            </article>
    )
}
export default DeviceChanges;