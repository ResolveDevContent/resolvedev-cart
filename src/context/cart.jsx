import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext();

function useCartContext() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = producto => dispatch({
        type: 'ADD_TO_CART',
        payload: producto
    })

    const update_quantity = (producto, value, calculation) => dispatch({
        type: 'UPDATE_QUANTITY',
        payload: producto,
        quantity: {  
            value: value,
            calculation: calculation
        }
    })

    const removeFromCart = producto => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: producto
    })

    const cleanCart = () => dispatch({ type: 'CLEAN_CART' })

    return { state, addToCart, removeFromCart, cleanCart, update_quantity }
} 

export function CartProvider() {
    const {state, addToCart, removeFromCart, cleanCart, update_quantity } = useCartContext()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            cleanCart,
            update_quantity
        }}>
            {children}
        </CartContext.Provider>
    )
}