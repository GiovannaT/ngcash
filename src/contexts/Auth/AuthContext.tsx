import { createContext, useEffect } from "react";
import { User } from "../../types/User";
import { useState } from "react"
import { useApi } from "../hooks/useApi";
import { setCookie, parseCookies } from "nookies";
import Router from 'next/router';



export type AuthContextType = {
    isAuthenticated: boolean,
    user: User | null,
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider ({ children }) {
    const api = useApi();
    const [user, setUser] = useState<User | null>(null);
    const isAuthenticated = !!user;

    useEffect(()=>{
        const {'ngcash-token': token} = parseCookies();
    }, [])

    const signIn = async (username: string, password: string) => {
        const {data} = await api.signIn(username, password);

        setCookie(undefined, 'ngcash-token', data.token, {
            maxAge: 60*60*24,  // 24h
        })

        if(data.user && data.token){
            setUser(data.user);
            Router.push('/index.tsx')
        }
    }

    const signOut = async () => {
        await api.logout();
        setUser(null);
    }


    return(
        <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}