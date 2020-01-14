import React, { useContext } from 'react';
import UserContext from './contexts/userContext';
import Gateway from './pages/Gateway';
import UserProfile from './pages/UserProfile';
import './App.css';

const App = () => {
    const {user, dispatch} = useContext(UserContext);
    console.log(user);
    
    return (
        <div className="App">
            <>
                {
                    user.isAuthenticated ?
                        <UserProfile />
                    :
                        <Gateway />  
                }
            </>
        </div>
    );
}

export default App;
