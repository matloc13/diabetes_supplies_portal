import React, { useState, useEffect, useContext, useRef } from 'react';
import useAddDeviceItem from './../../utilHooks/useAddDeviceItem';
import useInput from './../../utilHooks/useInput';
import UserContext from './../../contexts/userContext';

const ItemForm = ({ formType, reveal, deviceId }) => {
    const {user, dispatch} = useContext(UserContext);
    const [ {data, submitting }, setForm, setUrl ] = useAddDeviceItem();
    const {value:date, bind:bindDate, reset:resetDate } = useInput(" ");
    const {value:item, bind:bindItem, reset:resetItem } = useInput(" ");
    const {value:note, bind:bindNote, reset: resetNote } = useInput(" ");
    const [type, setType] = useState(" ");
    const [formInfo, setFormInfo] = useState({
        user_id: " ",
        device_id: " ",
        date: Date,
        item: " ",
        note: " "
    })

    const curType = useRef(null);

    const bundleSubmit = () => {
        setForm(formInfo);
        setUrl(`${deviceId}/add/${type}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetDate();
        resetItem();
        resetNote();
        return bundleSubmit();
    }


    useEffect(() => {
        const checkType = () => {
            switch(formType) {
                case "device change":
                    return setType("change");
                case "device aquired":
                    return setType("aquire");
                case "device failure":
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
                item,
                note,
            })
        }
        return () => {};
    }, [date, item, note, deviceId, user])//eslint-disable-line

    useEffect(() => {
        if (data.device_id) {
            reveal(false);
            switch (formType) {
                case "device change":
                    return dispatch({
                        type: "ADD_NEW_CHANGE",
                        payload: {
                            user_id: data.json.user_id,
                            device_id: data.json.device_id,
                            date: data.json.date,
                            item: data.json.item,
                            note: data.json.note
                        }
                     })
            
                case "device aquired":
                    return  dispatch({
                        type: "ADD_NEW_AQUIRED",
                        payload: {
                            user_id: data.json.user_id,
                            device_id: data.json.device_id,
                            date: data.json.date,
                            item: data.json.item,
                            note: data.json.note
                        }
                     })
                case "device failure":
                    return   dispatch({
                        type: "ADD_NEW_FAILURE",
                        payload: {
                            user_id: data.json.user_id,
                            device_id: data.json.device_id,
                            date: data.json.date,
                            item: data.json.item,
                            note: data.json.note
                        }
                     })
                default:
                    return;
            }
        }         
        return () => { 
        };
    }, [data])//eslint-disable-line

    return (
        <form onSubmit={handleSubmit} className={formType}>
            {
                submitting ?
                <h2>submitting...</h2>
                :
            <>
                <h2>{formType} form</h2>

                <fieldset>
                    <input 
                        type="date" 
                        name="date" 
                        id="date" 
                        {...bindDate}/>
                    <label htmlFor="date">Date</label>
                </fieldset>
    
                <fieldset>
                    <input 
                        type="text" 
                        name="item" 
                        id="item" 
                        {...bindItem} />
                    <label htmlFor="item">Item</label>
                </fieldset>
    
                <fieldset>
                    <input 
                        type="text" 
                        name="note" 
                        id="note" 
                        {...bindNote}/>
                    <label htmlFor="note">Notes</label>
                </fieldset>
                
                <fieldset>
                    <input 
                        type="submit" 
                        name="submit" 
                        id="submit" 
                        value={formType}/>
                    <label htmlFor="submit"></label>
                </fieldset>
            </>
            }

        </form>
    )
}
export default ItemForm;