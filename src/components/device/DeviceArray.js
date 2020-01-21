import React from 'react';
const DeviceArray = ({devices}) => {
    return (
        <section>
            
            <ul>
                {
                devices && 
                    devices.map((ele, index) => {
                        return (
                            <li key={index}>
                                {ele.brand}
                            </li>
                        )
                    })
                }
            </ul>
            {
                !devices && 
                <h4>User has no devices</h4>
            }
            
        </section>

    )
}
export default DeviceArray;