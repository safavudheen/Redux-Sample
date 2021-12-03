import {configureStore} from "@reduxjs/toolkit"
import colorReducer from "./color/colorSlice"


import countReducer from "./counter/countSlicer"


export default configureStore({
    reducer:{
        color: colorReducer,

        count: countReducer



    }
})
// second reducer is provided HEAR 