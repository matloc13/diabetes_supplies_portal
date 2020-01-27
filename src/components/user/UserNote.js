import React, { useState, useEffect } from 'react';
const UserNote = () => {
    const [textValue, setTextValue] = useState("Write something down so you don't forget.");
    const [formInfo, setFormInfo] = useState({});
    const [title, setTitle] = useState("untitled");
    const handleSubmit = () => {
        return ;
    }

    const handleChange = (e) => {
        switch (e.target.id) {
            case "title":
                return setTitle(...title, e.target.value);
            case "note":
                return setTextValue(...textValue, e.target.value);
            default:
                return;
        }
    }

    useEffect(() => {
        setFormInfo({
            ...formInfo,
            title,
            textValue,
            date: Date.now()
         })
        return () => {};
    }, [textValue])


    return (
        <section>
            <form onSubmit={handleSubmit}>
            <fieldset className="field-label">
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleChange}/>
                    <label 
                        htmlFor="note" 
                        className="label-style">
                            <span className="content-style">Title</span>
                    </label>
                </fieldset>
                
                <fieldset className="field-label">
                    <textarea 
                        autoFocus
                        name="note" 
                        id="note" 
                        className="textarea-style note"
                        required
                        onChange={handleChange}>
                        {textValue}
                    </textarea>
                    <label 
                        htmlFor="note" 
                        className="label-style">
                            <span className="content-style">Note</span>
                    </label>
                </fieldset>

                <fieldset className="field-label">
                    <input 
                        type="submit" 
                        name="submit" 
                        id="submit" 
                        value="save note"/>
                    <label htmlFor="submit"></label>

                </fieldset>
                
            </form>
        </section>
    )
}
export default UserNote;