import Router from 'next/router';
import { createContext } from "react";
import { useEffect, useState } from "react";

import { User } from "../../types/User";
import { useApi } from "../hooks/useApi";

export type AuthContextType = {
    user: User | null,
    signIn: (username: string, password: string) => Promise<boolean>;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider ({ children }) {
    const api = useApi();
    const [user, setUser] = useState<User | null>(null);

    useEffect(()=>{
        const validateToken= async () => {
            const storageData = localStorage.getItem('ngcash-token');
            if(storageData){
                const data = await api.validateToken(storageData);
                if(data.user){
                    setUser(data.user);
                }
            }
        }
        validateToken();

    },[])

    const signIn = async (username: string, password: string) => {
        const data = await api.signIn(username, password);

        if(data.user && data.token){
            setUser(data.user);
            setToken(data.token);
            Router.push('/index.tsx')
            return true;
        }
        return false;
    }

    const signOut = async () => {
        await api.logout();
        setUser(null);
        clearToken();
    }

    const setToken = (token: string) => {
        localStorage.setItem('ngcash-token', token);
    }

    const clearToken= () => {
        localStorage.removeItem('authToken');
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}