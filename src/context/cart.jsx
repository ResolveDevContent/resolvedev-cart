import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext();

function useCartContext() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = producto => dispatch({
        type: 'ADD_TO_CART',
        payload: producto
    })

    const removeFromCart = producto => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: producto
    })

    const cleanCart = () => dispatch({ type: 'CLEAN_CART' })

    return { state, addToCart, removeFromCart, cleanCart }
} 

export function CartProvider() {
    const {state, addToCart, removeFromCart, cleanCart } = useCartContext()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            cleanCart
        }}>
            {children}
        </CartContext.Provider>
    )
}