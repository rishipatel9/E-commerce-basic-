import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    total:0
}
export const quantitySlice = createSlice({
    name:"Total",
    initialState,
    reducers:{
        additem:(state,action)=>{
            const { id, quantity, price } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            console.log({id, quantity, price });
            if (index === -1) {
                state.items.push({ id, quantity, price });
            } else {
                state.items[index].quantity = quantity;
            }
            state.total = parseInt(state.items.reduce((acc, item) => acc + item.quantity * item.price, 0));
        }
    }
})

export const {additem} = quantitySlice.actions;
 
export default quantitySlice.reducer;