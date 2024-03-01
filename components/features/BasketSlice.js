import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    remail: "",
    freshRemail: ""
}
export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            if (action.payload.remail && (state.items[0] === undefined)) {
                state.items = [...state.items, action.payload,]
                state.freshRemail = action.payload.remail

                // alert(state.freshRemail)
            } else if (state.freshRemail === action.payload.remail) {
                const index = current(state.items).findIndex(
                    (basketItem) => basketItem.itemid === action.payload.itemid)
                    console.log(index)
               if(state.items[index]){

                   let newBasket = [...state.items];
                   let currentCounter = newBasket[index].quantity;
                   (newBasket[index].quantity === undefined ? currentCounter = 2
                    : (++currentCounter) )
                    newBasket[index].quantity = currentCounter;
                    newBasket[index].price_total = newBasket[index].quantity * newBasket[index].price
                    state.items = newBasket;
                }
                else{
                    state.items = [...state.items, action.payload]

                }    







                console.log(JSON.stringify(state.items[0], null, 2))
            }
            else {
                // alert('You cannot Buy Food From More Than One Resturant')
                if (confirm("You cannot Buy Food From More Than One Resturant, Are you sure you want to clear your cart?")) {
                    state.items = [];
                    state.freshRemail = "";
                }



            }

        },
        updateBasket: (state, action) => {
            const index = current(state.items).findIndex(
                (basketItem) => basketItem.itemid === action.payload.itemid)

            let newBasket = [...state.items];
            let currentCounter = newBasket[index].quantity;
            console.log(newBasket[index].quantity, "currentCounter")


            if (action.payload.itemAction === true) {
                (newBasket[index].quantity === undefined ? currentCounter = 2
                    : (++currentCounter) )
                newBasket[index].quantity = currentCounter;
                newBasket[index].price_total = newBasket[index].quantity * newBasket[index].price

            } else if (action.payload.itemAction === false) {
                // newBasket[index].quantity -= 1
                (newBasket[index].quantity === 1 ? currentCounter = 1
                    : (--currentCounter) )
                    newBasket[index].quantity = currentCounter;
                    console.log(action.payload.itemAction, "remove")
                newBasket[index].price_total = newBasket[index].quantity * newBasket[index].price
                console.log(newBasket[index], "remove")
            }

            console.log(current(state.items), "mai data hn")



            state.items = newBasket;
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(
                (basketItem) => basketItem.itemid === action.payload.itemid
            );
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn("cant Upload Product")
            }
            state.items = newBasket;
        }
    }
});
export const { addToBasket, removeFromBasket, updateBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
state.basket.items.reduce((price_total,item)=> price_total + item.price_total,0)
export default basketSlice.reducer;