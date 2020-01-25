import React, {useContext} from 'react';
import NavLink from './../nav/NavLink';
import UserContext from './../../contexts/userContext';

const DeviceArray = () => {
    const { allDevs } = useContext(UserContext);

    return (
        <section>
            
            <ul>
                {
                allDevs && 
                    allDevs.map((ele, index) => {
                        // console.log(ele);
                        
                        return (
                            <li key={index}>
                                Name:{ele.deviceName} Brand: {ele.brand} Model: {ele.model}
                                <NavLink 
                                    to={`deviceProfile/${ele._id}`}>        
                                        view
                                </NavLink>
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