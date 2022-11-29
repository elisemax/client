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
    async () => {
        const { request } = useHttp();
        const data = await request('http://34.118.48.240:8080/patient/encounters/1', 'GET', null)
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
//        fetchContent: (state: ContentState) => { state.loading=true },
const { actions, reducer } = contentSlice;
export default reducer;
//export const {

//} = actions;

    // return {images:[{id:1, name:'Doctors', src:doctors, srcWhite:doctorsWhite,status:'inactive'},
    //                 {id:2, name:'Insulin', src:insulin, srcWhite:insulinWhite,status:'inactive'},
    //                 {id:3, name:'Meds', src:medications, srcWhite:medicationsWhite,status:'inactive'},
    //                 {id:4, name:'Devices', src:devices, srcWhite:devicesWhite,status:'inactive'}]}