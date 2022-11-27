import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../hooks/http.hook';

const categoryAdapter = createEntityAdapter();
const initialState = categoryAdapter.getInitialState({
    status: 'idle',
    activeStatus: 'inactive',
});

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/filters");
    });