import React, {useContext} from 'react';
import {UserContext} from './../../contexts/index';
import MedicineRefill from './MedicineRefill';
const MedicineProfile = ({med_id}) => {
    const {medsArr} = useContext(UserContext);
    const refills = [];

    const med = medsArr.filter(ele => ele._id === med_id);
 
    return (
        <main className="med-profile">
            <section>

                <header>{med[0].name}</header>
                <div>
                    <span>{med[0].date}</span>
                    <p>{med[0].description}</p>
                    <p>{med[0].pharmacy}</p>
                    <p>{med[0].doctor}</p>
                    <p>{med[0].size}</p>
                    <p>{med[0].refillLength}</p>
                </div>
                <div>
                {
                    refills.map((ele) => {
                        return (
                            <MedicineRefill
                                item={ele}
                            />
                        )
                    })
                }
                </div>
            </section>
        </main>
    )
}
export default MedicineProfile;