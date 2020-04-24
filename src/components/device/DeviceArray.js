import React, { useContext } from 'react';
import NavLink from './../nav/NavLink';
import Store from '../../contexts/Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDigitalTachograph } from '@fortawesome/free-solid-svg-icons';

const DeviceArray = () => {
    const { allDevs } = useContext(Store);

    return (
        <section className="device-array-box">
            <ul className="devices-card-container">
                {allDevs &&
                    allDevs.map((ele, index) => {
                        return (
                            <li key={index} className="device-card-style">
                                <span className="card-name card">
                                    <h3>{ele.deviceName}</h3>
                                </span>

                                <span className="card-model card ">
                                    <h6>model:</h6>
                                    <b /> {ele.model}
                                </span>

                                <span className="card-brand card ">
                                    <h6>brand:</h6>
                                    <b /> {ele.brand}
                                </span>

                                <span className="card-link">
                                    <NavLink
                                        className="card-link card"
                                        to={`deviceProfile/${ele._id}`}
                                    >
                                        <h5>
                                            <FontAwesomeIcon icon={faDigitalTachograph} size="6x" />
                                        </h5>
                                    </NavLink>
                                </span>
                            </li>
                        );
                    })}
            </ul>
            {!allDevs && <h4>User has no devices</h4>}
        </section>
    );
};
export default DeviceArray;
