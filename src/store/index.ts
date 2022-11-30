import { configureStore } from '@reduxjs/toolkit';
import content from './slice/contentSlice'
import filter from './slice/filterSlice'

const customMiddleware = () => (next:Function) => (action:any) =>{
    console.log(action)
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
        filter
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
