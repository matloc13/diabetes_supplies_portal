import React, { useState } from 'react';
import NewItem from './../newItem/NewItem';
import ItemForm from './../form/ItemForm';
// import useGetDeviceItems from './../../utilHooks/useGetDeviceItems';

const DeviceChanges = ({ deviceId, changes }) => {
    const [formReveal, setFormReveal] = useState(false);
    // const { devices } = useGetDeviceItems(deviceId);
    console.log('changes', changes);
    const handleClick = () => {
        return setFormReveal(true);
    };

    // useEffect(() => {
    //     getChanges(deviceId);
    //     return () => {};
    // }, []);

    return (
        <>
            <article className="device-add-item">
                <h2>Site Changes</h2>
                <NewItem itemType="change" deviceId={deviceId} handleClick={handleClick} />
                {formReveal ? (
                    <ItemForm formType={'change'} reveal={setFormReveal} deviceId={deviceId} />
                ) : (
                    <ul className="item-list">
                        {changes.map((ele, i) => {
                            return (
                                <li key={i} className="item">
                                    <h3>{ele.item}</h3>
                                    <span>{ele.date.replace(/T.*$/g, '')}</span>
                                    <div>
                                        <p>{ele.note}</p>
                                        <p className="sensorId">{ele.sensorId}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}

                <b className="space" />
            </article>
        </>
    );
};
export default DeviceChanges;
