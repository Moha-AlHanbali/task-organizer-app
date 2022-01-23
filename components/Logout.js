import React from 'react';
import { useAuth } from '../contexts/auth'

export default function Logout() {
    const { logout } = useAuth();

    return (
        <div>
            <button onClick={logout}>logout</button>
        </div>
    );
}
