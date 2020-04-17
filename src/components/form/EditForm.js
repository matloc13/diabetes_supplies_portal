import React, { useEffect, useState, useContext } from 'react';
import Store from './../../contexts/Store';
import useHandleForm from './../../utilHooks/useHandleForm';
import useAddDeviceItem from './../../utilHooks/useAddDeviceItem';
const EditForm = ({ formType, deviceId, revealForm }) => {
    const { user } = useContext(Store);
    const { handleChange, values, reset } = useHandleForm();
    const [{ submitting }, setForm, setUrl] = useAddDeviceItem();
    const [formInfo, setFormInfo] = useState({
        date: '',
        transmitterId: '',
    });

    useEffect(() => {
        if (user.isAuthenticated) {
            setFormInfo({
                ...formInfo,
                user_id: user.id,
                device_id: deviceId,
                token: user.token,
                method: 'PUT',
                date: values.date,
                transmitterId: values.transmitterId,
            });
        }
        return () => {};
    }, [values.date, values.transmitterId]);
    const bundleSubmit = () => {
        setForm(formInfo);
        setUrl(`${formInfo.device_id}/transmitter_update`);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        reset();
        // revealForm();
        return bundleSubmit();
    };
    return (
        <form onSubmit={handleUpdate} className={`${formType} item-form`}>
            {submitting ? (
                <h2>submitting...</h2>
            ) : (
                <>
                    <h2>{formType} form</h2>
                    <button onClick={revealForm}>close</button>
                    <fieldset className="field-label">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={values.date}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor="date" className="label-style">
                            <span className="content-style">Date</span>
                        </label>
                    </fieldset>

                    <fieldset className="field-label">
                        <input
                            id="transmitterId"
                            type="text"
                            name="transmitterId"
                            value={values.transmitterId}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor="transmitterId" className="label-style">
                            <span className="content-style">Transmitter ID</span>
                        </label>
                    </fieldset>

                    <fieldset className="field-label">
                        <input
                            type="submit"
                            name="submit"
                            id="submit"
                            value={formType}
                            className={`${formType} submit-btn`}
                        />
                        <label htmlFor="submit" className="label-style" />
                    </fieldset>
                </>
            )}
        </form>
    );
};
export default EditForm;
