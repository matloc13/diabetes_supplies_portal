import React from 'react';
const MedicineRefill = ({item}) => {
    return (
        <li key={item.id}>
            {
                <>
                    <header>name</header>
                        <div>
                            <span>date</span>
                            <p>description</p>
                            <p>pharmacy</p>
                            <p>doctor</p>
                            <p>size</p>
                        </div>
                </>
            }
        </li>
    )
}
export default MedicineRefill;