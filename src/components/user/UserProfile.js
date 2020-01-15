import React, { useContext } from 'react';
import UserContext from './../../contexts/userContext';
import UserNav from './../nav/UserNav';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  
  return (
    <main>
      <UserNav/>
        <aside>
          <p>
            {`hello ${user.firstName} welcome back to your Diabetes Supply Manager`}
          </p>
            <ul>
                <li>full name: {user.firstName} {user.lastName}</li>
                <li>age: {user.age}</li>
                <li>birth date: {user.birthDate}</li>
            </ul>
        </aside>
        <aside>
          <h1>lists of users devices</h1>
        </aside>



    </main>
  )
}
export default UserProfile;