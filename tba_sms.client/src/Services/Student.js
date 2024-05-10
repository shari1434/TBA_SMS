import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StudentApi = createApi({
    reducerPath: 'StudentApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_BASE_API_URL}/Student/`}),
    endpoints: (builder) => ({
        getStudentByClassId: builder.query({
            query: (classId) => `GetStudentByClassId?classId=${classId}`,
        }),
    }),
})


export const { useGetStudentByClassIdQuery } = StudentApi;

export default StudentApi;