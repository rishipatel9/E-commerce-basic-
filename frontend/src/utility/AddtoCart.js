import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState ={   
    cart :[{}]
}

export const cartSlice  = createSlice({
    name:"C art",
    initialState,
    reducers:{
        add:(state,action) =>{
            const addtocart ={
                id:nanoid(),
                title:action.payload.title,
                imageUrl:action.payload.imageUrl,
                disPrice:action.payload.disPrice
            }
            state.cart.push(addtocart);
        },
        remove:(state,action) =>{

        }
    }
})