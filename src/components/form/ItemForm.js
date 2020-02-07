import React, { useState, useEffect, useContext } from 'react';
import useAddDeviceItem from './../../utilHooks/useAddDeviceItem';
import useInput from './../../utilHooks/useInput';
import Store from '../../contexts/Store';

const ItemForm = ({ formType, reveal, deviceId }) => {
    const {user } = useContext(Store);
    const [ {data, submitting }, setForm, setUrl ] = useAddDeviceItem();
    const {value:date, bind:bindDate, reset:resetDate } = useInput(" ");
    const {value:item, bind:bindItem, reset:resetItem } = useInput(" ");
    const {value:note, bind:bindNote, reset: resetNote } = useInput(" ");
    const {value:boxLabel, bindboxLabel, reset:resetboxLabel } = useInput(" ");
    const [type, setType] = useState(" ");
    const [formInfo, setFormInfo] = useState({
        user_id: " ",
        device_id: " ",
        date: Date,
        boxLabel: " ",
        item: " ",
        note: " "
    })

    const bundleSubmit = () => {
        setForm(formInfo);
        setUrl(`${deviceId}/add/${type}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetDate();
        resetItem();
        resetNote();
        resetboxLabel();
        return bundleSubmit();
    }


    useEffect(() => {
        const checkType = () => {
            switch(formType) {
                case "change":
                    return setType("change");
                case "aquired":
                    return setType("aquire");
                case "failure":
                    return setType("failure");
                default:
                    return;
            }
        }
        checkType()
    }, [formType, setType])

    useEffect(() => {
        if (user.isAuthenticated) {
            setFormInfo({
                ...formInfo,
                user_id: user.id,
                device_id: deviceId,
                token: user.token,
                date,
                boxLabel,
                item,
                note,
            })
        }
        return () => {};
    }, [date, item, note, deviceId, user])//eslint-disable-line

    useEffect(() => {
        if (data.device_id) {
            reveal(false);
        }
        return () => { 
        };
    }, [data])//eslint-disable-line

    return (
        <form onSubmit={handleSubmit} className={`${formType} item-form`}>
            {
                submitting ?
                <h2>submitting...</h2>
                :
            <>
                <h2>{formType} form</h2>

                <fieldset className="field-label">
                    <input 
                        type="date" 
                        name="date" 
                        id="date" 
                        {...bindDate}/>
                    <label 
                        htmlFor="date" 
                        className="label-style">
                            <span className="content-style">Date</span>
                    </label>
                </fieldset>
    
                <fieldset className="field-label">
                    <input 
                        type="text" 
                        name="item" 
                        id="item" 
                        {...bindItem} />
                    <label 
                        htmlFor="item" 
                        className="label-style">
                            <span className="content-style">Item</span>
                    </label>
                </fieldset>

                {
                    formType === "device aquired" &&
                    <fieldset className="field-label">
                        <input 
                            type="text" 
                            name="boxLabel" 
                            id="boxLabel" 
                            {...bindboxLabel} />
                        <label 
                            htmlFor="boxLabel" 
                            className="label-style">
                                <span className="content-style">Box Label</span>
                        </label>
                    </fieldset>

                }

                
    
                <fieldset className="field-label">
                    <input 
                        type="text" 
                        name="note" 
                        id="note" 
                        {...bindNote}/>
                    <label 
                        htmlFor="note" 
                        className="label-style">
                            <span className="content-style">Note</span>
                    </label>
                </fieldset>
                
                <fieldset className="field-label">
                    <input 
                        type="submit" 
                        name="submit" 
                        id="submit" 
                        value={formType}/>
                    <label htmlFor="submit" className="label-style"></label>
                </fieldset>
            </>
            }

        </form>
    )
}
export default ItemForm;