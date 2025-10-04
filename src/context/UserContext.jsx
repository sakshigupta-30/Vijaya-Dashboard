import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/axiosApi';
// import { useNavigate } from 'react-router-dom';
const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [loading, setLoading] = useState(true);
    // const navigate = useNavigate();
    // Try to refresh on app load (cookie-based refresh)
    useEffect(() => {
        (async () => {
            try {
                await refresh();
            } catch (e) {
                setUser(null); setAccessToken(null);
            } finally { setLoading(false); }
        })();
    }, []);

    async function login(email, password) {
        try{
            const res = await api.post('/auth/login', { email, password });
        localStorage.setItem('AccessToken', res.data.accessToken);
        localStorage.setItem('RefreshToken', res.data.user?.refreshToken);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.user?.refreshToken)
        setUser(res.data.user);
        }catch(e){
            throw new Error(e);
        }
    }

    async function signup(data) {
        const res = await api.post('/auth/signup', data);
        localStorage.setItem('AccessToken', res.data.accessToken);
        localStorage.setItem('RefreshToken', res.data.user?.refreshToken);
        setAccessToken(res.data.accessToken);
        setUser(res.data.user);
    }

    async function refresh() {
        const res = await api.post('/auth/refresh'); // uses cookie
        localStorage.setItem('AccessToken', res.data.accessToken);
        localStorage.setItem('RefreshToken', res.data.user?.refreshToken);
        setAccessToken(res.data.accessToken);
        setUser(res.data.user);
    }

    async function logout() {
        await api.post('/auth/logout');
        localStorage.removeItem('AccessToken');
        localStorage.removeItem('RefreshToken');
        setAccessToken(null);
        setUser(null);
    }
    const testRequest = async () => {
        try {
            const res = await api.get("/auth/me"); // must use api, not axios
            console.log("Response:", res.data);
            setUser(res.data.user);
            // navigate('/videos');
        } catch (err) {
            console.error("Error:", err);
        }
    };
    // Attach access token to outgoing requests
    useEffect(() => {
        testRequest();
        const interceptor = api.interceptors.request.use(config => {
            const token = localStorage.getItem("AccessToken");
            // console.log("TOKEN FOUND:", token);

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            // console.log("CONFIG HEADERS:", config.headers);
            return config;
        });

        return () => api.interceptors.request.eject(interceptor);
    }, [accessToken]);


    return (
        <AuthContext.Provider value={{ user, accessToken, loading, login, signup, logout, refresh }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}
