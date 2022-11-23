import { createContext } from "react";


type AuthContexType = {
    isAuthenticated: boolean;
}

//o objeto dos valores do contexto precisam ter o formato AuthContextType
export const AuthContext = createContext({} as AuthContexType)

export function AuthProvider({ children }) {
    const isAuthenticated = false;

    async function signIn(){
        const data = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
              })
        })

    }
    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )

}