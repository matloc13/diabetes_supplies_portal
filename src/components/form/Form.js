import React from 'react';
const Form = (formType) => {
  return (
    <form onSubmit>
      <label htmlFor="username">
        <input id="username" type="text"/>
      </label>
      <label htmlFor="password">
        <input id="username" type="password"/>
      </label>
      <label htmlFor="submit">
        <input type="submit" value={"login"}/>
      </label>
    </form>
  )
}
export default Form;  