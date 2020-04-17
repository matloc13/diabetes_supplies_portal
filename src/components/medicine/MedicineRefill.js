import React from 'react';

const MedicineRefill = ({ item }) => {
    return (
        <div key={item.id}>
            <header>{item.date}</header>
            <p>{item.details}</p>
        </div>
    );
};
export default MedicineRefill;
