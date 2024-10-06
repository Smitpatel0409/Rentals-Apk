import { serverApi } from '@/store/serverApi';

export const userApi = serverApi.enhanceEndpoints({ addTagTypes: ['User'] }).injectEndpoints({
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: (auth) => ({
                url: 'my-profile',
                method: 'GET',
                headers: { Authorization: `Bearer ${auth}` }
            }),
            providesTags: ['User']
        })
    }),
    overrideExisting: false
});

export const { useGetUserDataQuery } = userApi;
