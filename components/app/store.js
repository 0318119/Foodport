import { configureStore } from "@reduxjs/toolkit";
 import userReducer from "../features/UserSlice"
 import ResReducer from "../features/ResSlice"
 import BasketReducer from "../features/BasketSlice"
export default configureStore({
    reducer:{
         resturant:ResReducer,
        user:userReducer,
         basket:BasketReducer
    },
});
