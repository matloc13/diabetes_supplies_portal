import React, {useContext} from 'react';
import NavLink from './../nav/NavLink';
import UserContext from './../../contexts/userContext';

const DeviceArray = () => {
    const { allDevs } = useContext(UserContext);

    return (
        <section className="device-array-box">
            
            <ul className="devices-card-container">
                <b></b>
                {
                allDevs && 
                    allDevs.map((ele, index) => {
                        // console.log(ele);
                        
                        return (
                            <li 
                                key={index} 
                                className="device-card-style">
                                <span 
                                    className="card-brand card "> 
                                    <h3>
                                        {ele.brand}
                                    </h3>
                                </span> 
                                <span 
                                    className="card-model card "> 
                                    <h3>
                                        {ele.model}
                                    </h3>
                                </span>
                                <span 
                                    className="card-name card">
                                        <h3>
                                            {ele.deviceName}
                                        </h3>
                                </span> 
                                <span className="card-link">
                                    <NavLink 
                                        className="card-link card"
                                        to={`deviceProfile/${ele._id}`}>        
                                        <h4>device data</h4>
                                    </NavLink>
                                </span>
                            </li>
                        )
                    })
                }
                <b></b>
            </ul>
            {
                !allDevs && 
                <h4>User has no devices</h4>
            }
            
        </section>

    )
}
export default DeviceArray;