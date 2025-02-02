import React, { createContext, useState } from "react";


type UserContextProviderProps = {
    children: React.ReactNode;
}

type UserContextType = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export type AuthUser = {
    name: string;
    email: string;
}

export const UserContext = createContext({} as UserContextType)
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}