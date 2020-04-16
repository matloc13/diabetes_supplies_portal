import React, { useContext } from 'react';
import { Router } from '@reach/router';
import { Store } from '../contexts/index';
import { EditUser, UserNote } from './../components/user/index';
import UserProfileNav from './../components/nav/userProfileNav';
import MedicineList from './../components/medicine/MedicineList';
import useCalAge from './../utilHooks/useCalAge';

const UserProfile = () => {
    const { user, allDevs, medsArr } = useContext(Store);
    const { calAge } = useCalAge();
    //   console.log({user, medsArr, allDevs, curDev, device});

    return (
        <main className="profile-user">
            <UserProfileNav />
            <aside>
                <p>{`hello ${user.firstName} welcome back to your Diabetes Supply Manager`}</p>
                <ul>
                    <li>
                        full name: {user.firstName} {user.lastName}
                    </li>
                    <li>{user.userName}</li>
                    <li>age: {calAge(user.birthDate)}</li>
                    <li>birth date: {user.birthDate.replace(/T.*$/g, '')}</li>
                </ul>
            </aside>
            <Router>
                <EditUser path="editUser" />
                <UserNote path="userNote" />
            </Router>

            <aside>
                {allDevs.map((ele, i) => {
                    return <h3 key={i}>{ele.brand}</h3>;
                })}
            </aside>

            <aside>{<MedicineList meds={medsArr} />}</aside>
        </main>
    );
};
export default UserProfile;
