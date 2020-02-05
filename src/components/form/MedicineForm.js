import React, { useState, useEffect } from 'react';
import useManageMeds from './../../utilHooks/useManageMeds';
import useInput from './../../utilHooks/useInput';

const MedicineForm = () => {

    const {addMed, medsArr} = useManageMeds();
    console.log(medsArr);
    
    const { value:name, bind:bindname, reset:resetname } = useInput('');
    const { value:description, bind:binddescription, reset:resetdescription } = useInput('');
    const { value:date, bind:binddate, reset:resetdate } = useInput('');
    const { value:prescriptionNumber, bind:bindprescriptionNumber, reset:resetprescriptionNumber } = useInput('');
    const { value:doctor, bind:binddoctor, reset:resetdoctor } = useInput('');
    const { value:pharmacy, bind:bindpharmacy, reset:resetpharmacy } = useInput('');
    const { value:size, bind:bindsize, reset:resetsize } = useInput('');

    const [formInfo, setFormInfo] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        resetname();
        resetdescription();
        resetdate();
        resetprescriptionNumber();
        resetdoctor();
        resetpharmacy();
        resetsize();
       return addMed(formInfo);
    }

    useEffect(() => {
        setFormInfo(
            {
                ...formInfo,
                name,
                description,
                date,
                prescriptionNumber,
                doctor,
                pharmacy,
                size 
            }
        )
        return () => {};
    }, [name, description, date,prescriptionNumber, doctor, pharmacy, size])//eslint-disable-line

    return (
        <form onSubmit={handleSubmit}>
              <fieldset className="field-label">
                    <input 
                        id={"name"}
                        type="text"
                        name="name"
                        {...bindname}/>
                    <label htmlFor="name" className="label-style">
                        <span className="content-style">Name</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        id={"description"}
                        type="text"
                        name="description"
                        {...binddescription}/>
                    <label htmlFor="description" className="label-style">
                        <span className="content-style">Description</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        id={"date"}
                        type="date"
                        name="date"
                        {...binddate}/>
                    <label htmlFor="date" className="label-style">
                        <span className="content-style">Date Aquired</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        id={"prescriptionNumber"}
                        type="text"
                        name="prescriptionNumber"
                        {...bindprescriptionNumber}/>
                    <label htmlFor="prescriptionNumber" className="label-style">
                        <span className="content-style">Prescription Number</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        id={"doctor"}
                        type="text"
                        name="doctor"
                        {...binddoctor}/>
                    <label htmlFor="doctor" className="label-style">
                        <span className="content-style">Doctor Name</span>
                    </label>
                </fieldset>


                <fieldset className="field-label">
                    <input 
                        id={"pharmacy"}
                        type="text"
                        name="pharmacy"
                        {...bindpharmacy}/>
                    <label htmlFor="pharmacy" className="label-style">
                        <span className="content-style">Pharmacy Name</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        id={"size"}
                        type="text"
                        name="size"
                        {...bindsize}/>
                    <label htmlFor="size" className="label-style">
                        <span className="content-style">Size / Amount per refill</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                        <input 
                            type="submit" 
                            name="submit"
                            value={"ADD Your Meds"}/>
                        <label htmlFor="submit"></label>
                    </fieldset>
        </form>
    )
}
export default MedicineForm;