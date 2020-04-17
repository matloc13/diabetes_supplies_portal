import React from 'react';
import RefillForm from './../form/RefillForm';
const AddRefill = ({ med }) => {
    console.log('med', med);

    return (
        <main>
            <RefillForm med={med} />
        </main>
    );
};
export default AddRefill;
