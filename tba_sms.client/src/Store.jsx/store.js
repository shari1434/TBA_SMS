import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import sponsorApi from "../Services/Sponsor";
import classListApi from "../Services/ClassList";

const store = configureStore({
    reducer: {
        [sponsorApi.reducerPath] : sponsorApi.reducer,
        [classListApi.reducerPath] :classListApi.reducer
    },

    middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(sponsorApi.middleware).concat(classListApi.middleware),

})

setupListeners(store.dispatch)

export default store; 