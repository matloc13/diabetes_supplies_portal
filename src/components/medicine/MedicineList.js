import React from 'react';
import MedicineRefill from './MedicineRefill';
import useManageMeds from './../../utilHooks/useManageMeds';

const MedicineList = () => {

    const {meds, getAllMeds, getMedOne, addMed, addMalfunction, finish} = useManageMeds();
    return (
        <ul>
            {
                meds ?
                meds.map((ele, i) => {
                    return (
                        <MedicineRefill
                        item={ele}
                     />
                    )
                }) :
               <li> <h3>NO meds on record</h3> </li>
              
            } 
            
        </ul>
    )
}
export default MedicineList;