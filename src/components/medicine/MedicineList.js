import React from 'react';
import { Link, Router } from '@reach/router';
import useManageMeds from './../../utilHooks/useManageMeds';
import {MedicineProfile, MedicineRefill} from './index';

const MedicineList = () => {

    const {meds, getAllMeds, getMedOne, addMed, addMalfunction, finish} = useManageMeds();
    return (
        <ul>
            {
                meds ?
                meds.map((ele) => {
                    return (
                        <li key={ele.id}>
                            <Link to={`medicineprofile/${ele.id}`}>
                                {ele.name}
                            </Link>
                        </li>
                    )
                }) :
               <li> <h3>NO meds on record</h3> </li>
              
            } 
            <Router>
                <MedicineProfile path="medicineProfile/:med_id"/>
                <MedicineRefill path="medicineRefill/:med_id" />
            </Router>
            
        </ul>
    )
}
export default MedicineList;