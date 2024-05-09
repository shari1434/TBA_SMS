import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sponsorApi = createApi({
    reducerPath: 'sponsorApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7199/api/Sponsor/'}),
    endpoints: (builder) => ({
        getAllSponsors: builder.query({
            query: () => "GetAllSponsors",
        }),

        getSponsorById: builder.query({
            query: (sponsorId) => `GetSponsorById?sponsorId=${sponsorId}`
        }),

        updateSponsor: builder.mutation({
            query: ({ sponsorId, data }) => ({
                url: `updateSponsor?sponsorId=${sponsorId}`,
                method: 'PUT',
                body: data
            })
        })

    }),
})

export const { useGetAllSponsorsQuery, useGetSponsorByIdQuery, useUpdateSponsorMutation } = sponsorApi;

export default sponsorApi;