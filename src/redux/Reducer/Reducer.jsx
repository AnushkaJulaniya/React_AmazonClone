import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART } from "../ActionsType";
import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
    cart: {
        items: [],
    }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.cart.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: {
                        items: state.cart.items.map(item =>
                            item.id === action.payload.id ?
                                { ...item, quantity: item.quantity + 1 }
                                : item)
                    }
                }
            } else {
                return {
                    ...state,
                    cart: {
                        items: [...state.cart.items, { ...action.payload, quantity: 1 }]
                    }
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: {
                    items: state.cart.items.filter((item) => item.id !== action.payload)
                }
            }
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cart: {
                    items: state.cart.items.map((item) =>
                        item.id === action.payload.itemId
                            ? { ...item, quantity: action.payload.quantity }
                            : item
                    )
                }
            };
        case CLEAR_CART:
            return {
                ...state,
                cart: {
                    items: []
                }
            }

        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        < CartContext.Provider value={{ cart: state.cart , dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);




// export default cartReducer;