import React, { useState } from 'react';
import NewItem from './../newItem/NewItem';
import ItemForm from './../form/ItemForm';

const DeviceFailures = ({ deviceId, failures }) => {
    const [formReveal, setFormReveal] = useState(false);
    // const { devices } = useGetDeviceItems(deviceId);
    const handleClick = () => {
        return setFormReveal(true);
    };

    return (
        <>
            <article className="device-add-item">
                <h2>Device Failures</h2>
                <NewItem itemType="failure" deviceId={deviceId} handleClick={handleClick} />
                <ul>
                    {failures.map((ele, i) => {
                        return (
                            <li key={i} className="item">
                                <h3>{ele.item}</h3>
                                <span>{ele.date.replace(/T.*$/g, '')}</span>
                                <div>
                                    <p>{ele.note}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <b className="space" />
            </article>
            {formReveal && (
                <ItemForm formType={'failure'} reveal={setFormReveal} deviceId={deviceId} />
            )}
        </>
    );
};
export default DeviceFailures;
