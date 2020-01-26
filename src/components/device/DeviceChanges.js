import React from 'react';
import NewItem from './../newItem/NewItem';


const DeviceChanges = ({deviceId, changes}) => {

    return (
            <article>
                <h2>device changes</h2>
                <NewItem
                    itemType="device change"
                    deviceId={deviceId}
                    />               
                <ul>
                  {
                      changes.map((ele, i) => {
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
export default DeviceChanges;