import React, { useState } from 'react';
import NewItem from './../newItem/NewItem';
import ItemForm from './../form/ItemForm';

const DeviceChanges = ({ deviceId, changes }) => {
    const [formReveal, setFormReveal] = useState(false);

    const handleClick = () => {
        return setFormReveal(true);
    };

    return (
        <>
            <article className="device-add-item">
                <h2>Site Changes</h2>
                <NewItem itemType="change" deviceId={deviceId} handleClick={handleClick} />
                <ul className="item-list">
                    {changes.map((ele, i) => {
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
                <ItemForm formType={'change'} reveal={setFormReveal} deviceId={deviceId} />
            )}
        </>
    );
};
export default DeviceChanges;
