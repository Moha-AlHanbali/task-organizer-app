import React from 'react';
import Logout from '../components/Logout';

export default function Sidebar({ userName }) {
    
    return (
        <div>
            <div>
                <h4>{userName}</h4>
            </div>
            <div>
                <h4>Dashboard</h4>
            </div>
            <div>
                <h4><Logout /></h4>
            </div>
        </div>
    );
}
