// pages/profile.js
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function ProfilePage() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            {user ? (
                <div>
                    <p>Hello, {user.name}!</p>
                    <button onClick={() => setUser(null)}>Logout</button>
                </div>
            ) : (
                <p>Please login</p>
            )}
        </div>
    );
}

export default ProfilePage;