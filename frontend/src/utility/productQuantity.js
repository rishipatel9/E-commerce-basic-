import { createSlice } from "@reduxjs/toolkit";

const intitalState= {
    total:0,
    items:[]
}
const totalUpdate= (items) =>{
    let ogTotal = 0;
    items.map(item => {
        
    });
    return ogTotal;
}
export const totalSlice = createSlice({
    name:"Total",
    initialState:intitalState,
    reducers:{
        calculate:(state,action)=>{
            console.log(action.payload);
            state.total=totalUpdate(action.payload);
        }
    }
})

export const {calculate} =totalSlice.actions;

export default totalSlice.reducer;