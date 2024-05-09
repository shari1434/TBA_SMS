import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import sponsorApi from "../Services/Sponsor";

const store = configureStore({
    reducer: {
        [sponsorApi.reducerPath] : sponsorApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(sponsorApi.middleware),
})

setupListeners(store.dispatch)

export default store; 