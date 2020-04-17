import React, { useContext, useEffect } from 'react';
import { Router } from '@reach/router';
import { Store } from '../contexts/index';
import { MedicineRefill, AddRefill } from '../components/medicine/index';
import MedNav from './../components/nav/MedNav';
import useManageMeds from './../utilHooks/useManageMeds';

const MedicineProfile = ({ medId }) => {
    const { medsArr, refills } = useContext(Store);
    const { getRefills } = useManageMeds();

    useEffect(() => {
        getRefills(medId);
        return () => {};
    }, []);

    const med = medsArr.filter((ele) => ele._id === medId);

    return (
        <main className="profile-med">
            <MedNav />
            <section className="card-style">
                <header> {med[0].name} </header>
                <div className="card">
                    <p> {med[0].date} </p>
                    <p> {med[0].description} </p>
                    <p> {med[0].pharmacy} </p>
                    <p> {med[0].doctor} </p>
                    <p> {med[0].size} </p>
                    <p> {med[0].refillLength} </p>
                </div>

                <div>
                    <ul>
                        {refills.map((ele, i) => {
                            return (
                                <li key={i}>
                                    <MedicineRefill item={ele} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <Router>
                    <AddRefill path="addRefill/:medId" med={medId} />
                </Router>
            </section>
        </main>
    );
};
export default MedicineProfile;
