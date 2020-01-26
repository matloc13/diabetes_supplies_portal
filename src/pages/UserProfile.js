import React, { useContext } from 'react';
import UserContext from '../contexts/userContext';
import UserNav from '../components/nav/UserNav';

const UserProfile = () => {
  const { user, allDevs } = useContext(UserContext);
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
            {
                allDevs.map((ele, i) => {
                return (
                    <h3 key={i}>{ele.brand}</h3>
                    )
                })
            }
        </aside>



    </main>
  )
}
export default UserProfile;