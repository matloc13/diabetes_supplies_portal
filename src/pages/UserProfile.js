import React, { useContext } from 'react';
import UserContext from './../contexts/userContext';
import {DeviceFailures, DeviceChanges, DeviceAquired} from './../components/device';
const UserProfile = () => {
  const {user, dispatch} = useContext(UserContext);
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
        
        <section>
            <DeviceFailures />
            <DeviceChanges />
            <DeviceAquired />
       </section>
    </main>
  )
}
export default UserProfile;