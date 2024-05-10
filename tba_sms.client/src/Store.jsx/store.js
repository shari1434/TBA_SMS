import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import sponsorApi from "../Services/Sponsor";
import classListApi from "../Services/ClassList";
import { StudentApi } from "../Services/Student";

const store = configureStore({
    reducer: {
        [sponsorApi.reducerPath] : sponsorApi.reducer,
        [classListApi.reducerPath] : classListApi.reducer,
        [StudentApi.reducerPath] : StudentApi.reducer
    },

    middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(sponsorApi.middleware).concat(classListApi.middleware).concat(StudentApi.middleware),

})

setupListeners(store.dispatch)

export default store; 