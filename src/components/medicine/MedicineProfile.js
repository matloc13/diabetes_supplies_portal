import React from 'react';
import MedicineRefill from './MedicineRefill';
const MedicineProfile = () => {
    const refills = [];
    return (
        <main className="med-profile">
            <section>
                <header>name</header>
                <div>
                    <span>date</span>
                    <p>description</p>
                    <p>pharmacy</p>
                    <p>doctor</p>
                    <p>size</p>
                </div>


                {
                    refills.map((ele, i) => {
                        return (
                            <MedicineRefill
                                item={ele}
                            />
                        )
                    })
                }
            </section>
        </main>
    )
}
export default MedicineProfile;