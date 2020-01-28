import React, { useContext } from 'react';
import { Router } from '@reach/router';
import UserContext from '../contexts/userContext';
import { EditUser, UserNote } from './../components/user/index';
import UserProfileNav from './../components/nav/userProfileNav';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  
  return (
    <main className="profile-user">
        <UserProfileNav />
            <aside>
                <p>
                    {`hello ${user.firstName} welcome back to your Diabetes Supply Manager`}
                </p>
                <ul>
                    <li>full name: {user.firstName} {user.lastName}</li>
                    <li>{user.userName}</li>
                    <li>age: {user.age}</li>
                    <li>birth date: {user.birthDate}</li>
                </ul>
            </aside>
        <Router>
            <EditUser path="editUser" />
            <UserNote path="userNote" />
        </Router>
         
            {/* <aside>
                {
                    allDevs.map((ele, i) => {
                    return (
                        <h3 key={i}>{ele.brand}</h3>
                        )
                    })
                }
            </aside> */}



    </main>
  )
}
export default UserProfile;