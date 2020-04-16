import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPager } from '@fortawesome/free-solid-svg-icons';

const NewItem = ({ itemType, deviceId, handleClick }) => {
    console.log({ itemType, deviceId });

    return (
        <article className={`btn-container`}>
            <label htmlFor="btn-new">
                <button id="btn-new" className={`btn-item ${itemType}`} onClick={handleClick}>
                    <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faPager} size="2x" />{' '}
                    {itemType.replace(/\s.*?/g)}
                </button>
            </label>
        </article>
    );
};
export default NewItem;
