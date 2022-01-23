import { createContext, useContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios'
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + '/accounts/login/';
const LOCAL_STORAGE_KEY = 'taskOrganizerApp.auth.token'

const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error('You forgot AuthProvider!');
    return auth;
}

export function AuthProvider(props) {

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });

    async function login(username, password) {

        const response = await axios.post(tokenUrl, { username, password });

        const decodedAccess = jwt.decode(response.data.access);

        const newState = {
            tokens: response.data,
            user: {
                username: decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id,
                firstName: decodedAccess.first_name,
                lastName: decodedAccess.last_name,
                age: decodedAccess.age
            },
        }

        setState(prevState => ({ ...prevState, ...newState }));
    }

    function logout() {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        const newState = {
            tokens: null,
            user: null,
        }
        setState(prevState => ({ ...prevState, ...newState }));
    }

    // PERSIST TOKENS DATA IN LOCAL STORAGE
    useEffect(() => {
        if (state.tokens) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.tokens))
    }, [state]);

    // READ TOKENS DATA FROM LOCAL STORAGE
    useEffect(() => {
        const storedTokens = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTokens) {
            const decodedAccess = jwt.decode(storedTokens.access);
            const newState = {
                tokens: storedTokens,
                user: {
                    username: decodedAccess.username,
                    email: decodedAccess.email,
                    id: decodedAccess.user_id,
                    firstName: decodedAccess.first_name,
                    lastName: decodedAccess.last_name,
                    age: decodedAccess.age
                },
            }
            setState(prevState => ({ ...prevState, ...newState }))
        }
    }, []);

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}