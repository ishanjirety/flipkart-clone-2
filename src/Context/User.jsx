import React, { useReducer, createContext, useContext, useState } from 'react'
import { userReducer, initialState } from '../Reducers'

const UserContext = createContext()

export const User = ({ children }) => {
    const [userState, userDispatch] = useReducer(userReducer, initialState)
    const [route, setRoute] = useState("Home")

    return (
        <UserContext.Provider value={{ userState, userDispatch, route, setRoute }}>
            {children}
        </UserContext.Provider>
    )
}
export function useUser() {
    return useContext(UserContext)
}


