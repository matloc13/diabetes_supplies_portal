import React, {useContext} from 'react';
import UserContext from './../../contexts/userContext';

const DeviceArray = () => {
    const {user, device, allDevs} = useContext(UserContext);
    return (
        <section>
            
            <ul>
                {
                allDevs && 
                    allDevs.map((ele, index) => {
                        return (
                            <li key={index}>
                                Name:{ele.deviceName} Brand: {ele.brand} Model: {ele.model}
                            </li>
                        )
                    })
                }
            </ul>
            {
                !allDevs && 
                <h4>User has no devices</h4>
            }
            
        </section>

    )
}
export default DeviceArray;