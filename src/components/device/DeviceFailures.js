import React, { useState, useEffect } from 'react';
import NewItem from './../newItem/NewItem';
import ItemForm from './../form/ItemForm';
import useGetDeviceItems from './../../utilHooks/useGetDeviceItems';

const DeviceFailures = ({ deviceId, failures, update }) => {
    const [formReveal, setFormReveal] = useState(false);
    const { getAll } = useGetDeviceItems();
    const handleClick = () => {
        return setFormReveal(true);
    };

    useEffect(() => {
        getAll(deviceId);
        return () => {};
    }, []);

    useEffect(() => {
        getAll(deviceId);
        update();
        return () => {};
    }, [formReveal, failures]);

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
