import React from 'react';
import { Link } from '@reach/router';

const MedicineList = ({ meds }) => {
    console.log('meds', meds);

    return (
        <ul className="card-container">
            {meds ? (
                meds.map((ele, i) => {
                    return (
                        <li key={i} className="card-style">
                            <Link to={`/medicineProfile/${ele._id}`}>
                                {ele.name} {ele.size}
                            </Link>
                        </li>
                    );
                })
            ) : (
                <li>
                    {' '}
                    <h3>NO meds on record</h3>{' '}
                </li>
            )}
        </ul>
    );
};
export default MedicineList;
