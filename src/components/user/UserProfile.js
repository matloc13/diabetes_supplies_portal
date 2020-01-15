import React, { useContext } from 'react';
import UserContext from './../../contexts/userContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  
  return (
    <main>
        <aside>
            <ul>
                <li>{user.firstName}</li>
                <li>{user.lastName}</li>
                <li>{user.age}</li>
                <li>{user.birtDate}</li>
            </ul>
        </aside>
        <aside>
          <h1>lists of users devices</h1>
        </aside>



    </main>
  )
}
export default UserProfile;