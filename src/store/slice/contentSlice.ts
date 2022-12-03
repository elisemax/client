import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { ContentState } from "../../types/content";
const initialState: ContentState = {
    content: [],
    loading: false,
    error: null
}
export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    (filter:string) => {
        const { request } = useHttp();
        const data = request(`http://192.168.0.108:8080/patient/jeson`, 'GET', null);
        console.log(data);
        return data;
    }
)

const contentSlice = createSlice({
    name:'content',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => { state.loading = true; })
        builder.addCase(fetchContent.fulfilled, (state, { payload }) => { state.content = payload; state.loading = false; })
        builder.addCase(fetchContent.rejected, (state) => { state.error = 'Error'; state.loading = false; })
        builder.addDefaultCase((state) => { state.loading = false; })
    }
})

const { actions, reducer } = contentSlice;

export default reducer;

//export const {
//
//} = actions;
