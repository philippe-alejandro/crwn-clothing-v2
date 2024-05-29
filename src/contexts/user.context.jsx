import { useState, createContext, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
import React from 'react';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const INITIAL_STATE = {
    currentUser: null
};

export const UserReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {...state, currentUser: payload};
        default:
            throw new Error(`${type} is not available in user reducer.`);
    };
};

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    const { currentUser } = state;
    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    };

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};