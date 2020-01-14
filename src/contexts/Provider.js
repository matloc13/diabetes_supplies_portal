import React, { useReducer } from 'react';
import App from './../App';
import UserContext from './userContext';
import userReducer from '../reducers/userReducer';

const initUser = {
  firstName: " ",
  lastName: " ",
  age: 0,
  birthDate: Date.now(),
  password: " ",
  isAuthenticated: false
}

const Provider = () => {
  const [user, dispatchUser] = useReducer(userReducer, initUser);
  const dispatch = (action) => {
    [dispatchUser].forEach((fn) => {
        fn(action);
    })
}
  return (
    <UserContext.Provider value={{user, dispatch}}>
      <App />
    </UserContext.Provider>
  )
}
export default Provider;