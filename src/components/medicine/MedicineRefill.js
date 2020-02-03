import React from 'react';
const MedicineRefill = ({item}) => {
    return (
        <li key={item.id}>
            {
                <>
                    <header>name</header>
                        <div>
                            <span>date</span>
                            <p>pharmacy</p>
                        </div>
                </>
            }
        </li>
    )
}
export default MedicineRefill;