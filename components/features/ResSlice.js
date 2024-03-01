import { createSlice } from "@reduxjs/toolkit";

export const ResSlice = createSlice({
name:"resturant",
initialState:{
    selectedResturant:null,
    ResturantIsOpen:false,
},
reducers:{
    selectResturant:(state,action)=>{
        state.selectedResturant=action.payload;
    },
    openResturant:(state)=>{
        state.ResturantIsOpen=true;
    },
    closeResturant:(state)=>{
        state.ResturantIsOpen=false
    }
}
});
export const {selectResturant,openResturant,closeResturant}=ResSlice.actions;
export const selectOpenResturant =(state) => state.resturant.selectedResturant;
export const selectResturantIsOpen =(state) => state.resturant.ResturantIsOpen;
export default ResSlice.reducer;