import React from 'react';
import { useAuth } from '../contexts/auth'

export default function Profile() {
    const { user } = useAuth();

    function getAge(dateString) {
        let ageInMilliseconds = new Date() - new Date(dateString);
        return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    }
    return (
        <>
            {user ?
                <div>
                    <h4>
                        Username: {user.username}
                    </h4>
                    <h4>
                        E-mail: {user.email}
                    </h4>
                    <h4>
                        First Name: {user.firstName}
                    </h4>
                    <h4>
                        Last Name: {user.lastName}
                    </h4>
                    <h4>
                        BirthDate: {user.age.slice(1, -1)}
                    </h4>
                    <h4>
                        Age: {getAge(user.age)}
                    </h4>
                </div>
                : <p>Loading</p>}
        </>
    );
}
