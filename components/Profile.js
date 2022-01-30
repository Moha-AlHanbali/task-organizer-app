import React from 'react';
import { useAuth } from '../contexts/auth'
import Sidebar from './Sidebar';

export default function Profile() {
    const { user } = useAuth();

    function getAge(dateString) {
        let ageInMilliseconds = new Date() - new Date(dateString);
        return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    }
    return (
        <>
       {user ? <div>
            <h4>
                username: {user.username}
            </h4>
            <h4>
                email: {user.email}
            </h4>
            <h4>
                first name: {user.firstName}
            </h4>
            <h4>
                last name: {user.lastName}
            </h4>
            <h4>
                birth date: {user.age.slice(1,-1)}
            </h4>
            <h4>
                age: {getAge(user.age)}
            </h4>
        </div>
        : <p>Loading</p>}
        </>
    );
}
