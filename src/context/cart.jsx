import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext()

function useCartContext() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = producto => dispatch({
        type: 'ADD_TO_CART',
        payload: producto
    })

    /**
     * @param {Object} producto Producto a actualizar.
     * @param {number} value Cantidad del producto a actualizar.
     * @param {boolean} calculation Si se quiere una SUMA o RESTA debera ser TRUE si no FALSE.
    */
    const updateQuantity = (producto, value = 1, calculation = true) => dispatch({
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

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, clearCart, updateQuantity }
} 

export function CartProvider({children}) {
    const {state, addToCart, removeFromCart, clearCart, updateQuantity } = useCartContext()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart,
            updateQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}