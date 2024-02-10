import { createSlice } from "@reduxjs/toolkit";

const NameSlice = createSlice({
    name: "Name",
    initialState: {
        namelist:[]
    },
    reducers: {
        getNameList(state:any,action){
            state.namelist.push(action.payload)
        },
        editName(state:any,action){
            state.namelist.map((name:any) => {
                if (name.id === action.payload.id) {
                    return name.name = action.payload.name;
                }
                return name;
            })
        },
        deleteName(state:any,action){
            state.namelist = state.namelist.filter((name:any)=>name.id!==action.payload.id)
        }
    }
})
export const {getNameList,editName,deleteName} = NameSlice.actions
export default NameSlice.reducer