import React from 'react';
import { Link, Router } from '@reach/router';
import {MedicineProfile, MedicineRefill} from './index';

const MedicineList = ({meds}) => {
console.log(meds);

    return (
        <ul>
            {
                meds ?
                meds.map((ele) => {
                    return (
                        <li key={ele._id}>
                            <Link to={`medicineProfile/${ele._id}`}>
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