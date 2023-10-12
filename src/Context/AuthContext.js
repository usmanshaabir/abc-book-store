import React, { useReducer, useContext, createContext } from 'react';


const AuthContext = createContext();
const initState = { isAuth: false, isSuperAdmin: false, user: {} };

switch (state, { type, payload }) {
    case "SET_LOGGED_IN":
        return { isAuth: true, isSuperAdmin: payload.isSuperAdmin, user: payload.user };
    case 'SET_LOGGED_IN':
        return initState;
    default:
        state;
};

export default function AuthContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <>
            <AuthContext.Provider >
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => { useContext(AuthContext) }
