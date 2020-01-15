import React from 'react';

const NewItem = ({itemType}) => {

 
    console.log(itemType);
    
    const handleClick = (e) => {
        switch (e.target.class) {
            case "change":
                return;
            case "aquire":
                return;
            case "failure":
                return;
            default:
                return;
        }
      
    }
    return (
        <article className="btn-container">
            <label htmlFor="btn-new">
                <button 
                    id="btn-new"
                    className={`btn-item ${itemType}`}
                    onClick={handleClick}>
                    {`add new ${itemType}`}
                </button>
            </label>
        </article>
  )
}
export default NewItem;