import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'ENTER_YOUR_BASE_URL'
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
    try {
        const result = await baseQuery(args, api, extraOptions);
        if (result.error && [401, 500].includes(result.error.status as number)) {
            localStorage.clear();
        }
        return result;
    } catch (error) {
        console.error('API request failed:', error);
        return { error: { status: 'FETCH_ERROR', error: 'An error occurred while fetching data' } };
    }
};

export const serverApi = createApi({
    reducerPath: 'serverApi',
    refetchOnFocus: true,
    refetchOnReconnect: true,
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User', 'GetUser', 'Users'],
    endpoints: () => ({})
});
