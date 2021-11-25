import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {load, save} from 'redux-localstorage-simple'
import user from './user'

const PERSISTED_KEYS: string[] = ['user']

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        user,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: true}).concat(save({states: PERSISTED_KEYS})),
    preloadedState: load({states: PERSISTED_KEYS}),
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()

export default store