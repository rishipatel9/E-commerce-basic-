import { createSlice } from "@reduxjs/toolkit";

const initialState ={   
    cart :[]
}

export const cartSlice  = createSlice({
    name:"Cart",
    initialState:initialState,
    reducers:{
        add:(state,action) =>{
            const addtocart ={
                id:action.payload.id,
                title:action.payload.title,
                imageUrl:action.payload.imageUrl,
                disPrice:action.payload.disPrice
            }
            state.cart.push(addtocart);
        },
        remove:(state,action) =>{
            state.cart=state.cart.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {add,remove} =cartSlice.actions;

export default cartSlice.reducer;