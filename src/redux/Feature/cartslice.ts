import { IProduct } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface cartProduct extends IProduct {
    orderQuantity: number
}
interface InitialState {
    products: cartProduct[],
    city: string,
    shippingAddress: string
}
const initialState: InitialState = {
    products: [],
    city: '',
    shippingAddress: ''
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productToAdd = state.products.find(product => product._id === action.payload._id)
            if (productToAdd) {
                productToAdd.orderQuantity += 1
                return;
            }
            state.products.push({ ...action.payload, orderQuantity: 1 })
        },
        inCrementOrderQuantity: (state, action) => {
            const productToIncrement = state.products.find(product => product._id === action.payload)
            if (productToIncrement) {
                productToIncrement.orderQuantity += 1
                return;
            }

        },
        deCrementOrderQuantity: (state, action) => {
            const productToDeIncrement = state.products.find(product => product._id === action.payload)
            if (productToDeIncrement) {
                productToDeIncrement.orderQuantity -= 1
                return;
            }


        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload)


        },
        updateCity: (state, action) => {
            state.city = action.payload
        },
        updateShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
        },
        clearCart: (state) => {
            state.products = []
            state.city = ''
            state.shippingAddress = ''



        }


    }
})


//! all product
export const orderedProduct = (state: RootState) => state.cart.products;


export const orderSelector = (state: RootState) => {
    return {

        products: state.cart.products.map((product) => ({
            product: product._id,
            quantity: product.orderQuantity,
            color: "white"

        })),
        shippingAddress: `${state.cart.shippingAddress} - ${state.cart.city}`,
        paymentMethod: "Online"
    }
}



export const { addProduct, inCrementOrderQuantity, deCrementOrderQuantity, removeProduct, updateCity, updateShippingAddress , clearCart } = cartSlice.actions

//! total price
export const subTotalSelector = (state: RootState) => {
    return state.cart.products.reduce((acc, product) => {
        if (product.offerPrice) {

            return acc + product.offerPrice * product.orderQuantity
        } else {
            return acc + product.offerPrice * product.orderQuantity
        }
    }, 0)
}

//! shipping cost
export const shippingCostSelector = (state: RootState) => {
    if (state.cart.city && state.cart.city === "Dhaka" && state.cart.products.length > 0) {
        return 60
    } else if (state.cart.city && state.cart.city !== "Dhaka" && state.cart.products.length > 0) {
        return 120
    }
    else {
        return 0;
    }

}

//! grand total 

export const grandTotalSelector = (state: RootState) => {
    const subtotal = subTotalSelector(state)
    const shippingCost = shippingCostSelector(state)

    return subtotal + shippingCost
}



//! Address
export const citySelector = (state: RootState) => state.cart.city;
export const shippingSelector = (state: RootState) => state.cart.shippingAddress;







export default cartSlice.reducer;