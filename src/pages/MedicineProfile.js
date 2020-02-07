import React, {useContext, useEffect } from 'react';
import { Router } from '@reach/router';
import {Store} from '../contexts/index';
import {MedicineRefill, AddRefill} from '../components/medicine/index';
import MedNav from './../components/nav/MedNav';
import useManageMeds from './../utilHooks/useManageMeds';

const MedicineProfile = ({med_id}) => {
    const {medsArr, refills} = useContext(Store);   
    const { getRefills } = useManageMeds();
    
    useEffect(() => {
        getRefills(med_id);
        return () => {};
    }, [])

    const med = medsArr.filter(ele => ele._id === med_id);
 
    return (
        <main className="med-profile">
            <MedNav/>
            <section>

                <header> {med[0].name} </header>
                <div>
                    <span> {med[0].date} </span>
                    <p> {med[0].description} </p>
                    <p> {med[0].pharmacy} </p>
                    <p> {med[0].doctor} </p>
                    <p> {med[0].size} </p>
                    <p> {med[0].refillLength} </p>
                </div>
                    
                <div>
                <ul>
                {
                    refills.map((ele, i) => {
                        return (
                            <li key={i}>
                            <MedicineRefill
                                item={ele}
                            />
                            </li>
                    )})
                }
                </ul>
                
                </div>
                <Router>
                    <AddRefill path="addRefill/:med_id" med={med_id} />
                </Router>
            </section>
        </main>
    )
}
export default MedicineProfile;