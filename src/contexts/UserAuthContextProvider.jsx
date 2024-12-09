/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const UserAuthContext = createContext("");

export function useUserAuthContext(){
    return useContext(UserAuthContext);
}
export function UserAuthContextProvider({children}){
    let [userJwt, setUserJwt] = useState("");


    return(
        <UserAuthContext.Provider value={[userJwt, setUserJwt]} >
            {children}
        </UserAuthContext.Provider>
    )
}