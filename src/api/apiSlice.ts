import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice:any = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://34.118.48.240:8080/patient'}),
    endpoints: (builder) => ({
        getEncounters: builder.query({
            query: () => '/encounters/1',
        })
    }),
});
export const {useGetEncountersQuery} = apiSlice;