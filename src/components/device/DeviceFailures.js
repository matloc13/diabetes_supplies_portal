import React from 'react';
import NewItem from './../newItem/NewItem';

const DeviceFailures = ({ deviceId, failures }) => {
    return (
        <article>
            <h2>device failures</h2>
            <NewItem
                itemType="device failure"
                deviceId={deviceId}
                 />
            <ul>
                {
                    failures.map((ele,i) => {
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
export default DeviceFailures;