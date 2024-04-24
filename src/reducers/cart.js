export const cartInitialState = JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem("cart", JSON.stringify(state));
}

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload,
                productInCartIndex = state.findIndex((item) => item.id === id);

        if(productInCartIndex >= 0) {
            const new_state = [
                ...state.slice(0, productInCartIndex),
                { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1},
                ...state.slice(productInCartIndex + 1)
            ]

            updateLocalStorage(new_state);
            return new_state;
        }

        const new_state = [
            ...state,
            {
                ...action.payload,
                quantity: 1
            }
        ]

        updateLocalStorage(new_state);
        return new_state;
    },

    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload,
                new_state = state.filter((item) => item.id !== id);

        updateLocalStorage(new_state);
        return new_state;
    },

    [CART_ACTION_TYPES.CLEAR_CART]: () => {
        updateLocalStorage([]);
        return [];
    }
}

export const cartReducer = (state, action) => {
    const { type: actionType } = action,
            updateState = UPDATE_STATE_BY_ACTION[actionType];

    return updateState ? updateState(state, action) : state;
}