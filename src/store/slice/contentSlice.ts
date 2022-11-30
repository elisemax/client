import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { ContentState } from "../../types/content";
const initialState: ContentState = {
    content: [],
    loading: false,
    error: null
}
export const fetchContent = createAsyncThunk<ContentState>(
    'content/fetchContent',
    async (filter) => {
        const { request } = useHttp();
        const data = await request(`http://34.118.48.240:8080/patient/${filter}/1`, 'GET', null)
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
        builder.addCase(fetchContent.fulfilled, (state, { payload }) => { state.content = payload.content; state.loading = false; })
        builder.addCase(fetchContent.rejected, (state) => { state.error = 'Error'; state.loading = false; })
        builder.addDefaultCase((state) => { state.loading = false; })
    }
})

const { actions, reducer } = contentSlice;

export default reducer;

//export const {

//} = actions;
