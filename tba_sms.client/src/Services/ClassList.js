import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const classListApi = createApi({
    reducerPath: 'classListApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_BASE_API_URL}/Class/`}),
    endpoints: (builder) => ({
        getClassList: builder.query({
            query: () => "GetNoOfStudents",
        }),
    }),
})


export const { useGetClassListQuery } = classListApi;

export default classListApi;