import { configureStore } from '@reduxjs/toolkit';
import content from './slice/contentSlice'
import filter from './slice/filterSlice'
import userSlice from './slice/userSlice'

const customMiddleware = () => (next:Function) => (action:any) =>{
    if (typeof action==='string') {
        return next({
            type: action
        })
    }
    return next(action)
}

export const store = configureStore({
    reducer:{
        content,
        filter,
        userSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
