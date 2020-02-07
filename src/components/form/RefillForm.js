import React, { useEffect, useState } from 'react';
import useInput from './../../utilHooks/useInput';
import useManageMeds from './../../utilHooks/useManageMeds';
const RefillForm = ({med}) => {

    const { value:date, bind:binddate, reset:resetdate } = useInput('');
    const { value:details, bind:binddetails, reset:resetdetails } = useInput('');

    const [formInfo, setFormInfo] = useState({
        date: Date.now,
        details
    });

    const {addRefill} = useManageMeds();

    const handleSubmit = (e) => {
        e.preventDefault();
        resetdate();
        resetdetails();
        return addRefill(formInfo)
    }

    useEffect(() => {
        console.log(med);
        
       if (med) {
            setFormInfo({
                med_id: med,
                date,
                details,
            })
       }
       return () => {};
   }, [date, details, med])


    return (
        <form onSubmit={handleSubmit}>
                 <fieldset className="field-label">
                    <input 
                        id={"date"}
                        type="date"
                        name="date"
                        {...binddate}/>
                    <label htmlFor="date" className="label-style">
                        <span className="content-style">Date</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        id={"details"}
                        type="text"
                        name="details"
                        {...binddetails}/>
                    <label htmlFor="details" className="label-style">
                        <span className="content-style">Details</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        id={"submit"}
                        type="submit"
                        name="submit"/>
                    <label htmlFor="submit" className="label-style">
                        <span className="content-style"></span>
                    </label>
                </fieldset>
        </form>
    )
}
export default RefillForm;