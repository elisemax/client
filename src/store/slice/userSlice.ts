import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:[
        {
            id: 1,
            name: 'Angela Beaver',
            role: 'Patient',
            imageUrl:
                'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Yvette Blanchard',
            role: 'Patient',
            imageUrl:
                'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Lawrence Brooks',
            role: 'DiaBro',
            imageUrl:
                'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Kathryn Cooper',
            role: 'Patient',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 5,
            name: 'Jeffrey Clark',
            role: 'Doctor',
            imageUrl:
                'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ],
    user: 0,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state:any, action:any) => {
            state.users.push(action.payload)
        },
        changeUser : (state:any, action:any) => {
            state.user = action.payload
        }
    }
})
const { actions, reducer } = userSlice;
export const { addUser,changeUser } = actions;
export default reducer;