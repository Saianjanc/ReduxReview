import { configureStore } from "@reduxjs/toolkit";
import NameSlice from "./NameSlice";

const AppStore = configureStore({
    reducer:{
        name:NameSlice
    }
})

export default AppStore