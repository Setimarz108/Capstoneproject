import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoExchangesHeaders = {

    'x-rapidapi-host': 'coinlore-cryptocurrency.p.rapidapi.com',
    'x-rapidapi-key': "10b601e1d5msha7bb3f9b00f7316p1ccf76jsn9e7fed8f66bb"
}

const baseUrl = 'https://coinlore-cryptocurrency.p.rapidapi.com/api';
const createRequest = (url) => ({ url, headers:cryptoExchangesHeaders})


export const cryptoExchanges = createApi({

    reducerPath: 'cryptoExchanges',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getExchanges: builder.query({
             query: () => createRequest(`/exchanges/`)
        }),

  })
})

export const {useGetExchangesQuery} = cryptoExchanges;