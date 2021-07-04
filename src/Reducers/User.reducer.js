export function userReducer(state, { type, payload }) {
    switch (type) {
        case "ADD-TO-CART":
            return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] }
        case "REMOVE-FROM-CART":
            return { ...state, cart: state.cart.filter(element => element.id !== payload) }
        case "INCREMENT-QUANTITY":
            return { ...state, cart: state.cart.map(element => element.id === payload ? { ...element, qty: element.qty + 1 } : element) }
        case "DECREMENT-QUANTITY":
            return { ...state, cart: state.cart.map(element => element.id === payload ? { ...element, qty: element.qty > 0 ? element.qty - 1 : 0 } : element) }
        case "SAVE-FOR-LATER":
            return { cart: state.cart.filter(element => element.id !== payload.id), saveForLater: [...state.saveForLater, payload] }
        case "REMOVE-FROM-SAVE":
            console.log(payload)
            return { ...state, saveForLater: state.saveForLater.filter(element => element.id !== payload) }
        case "REFRESH-CART":
            return { cart: [...state.cart, ...state.saveForLater], saveForLater: [] }
        default:
            return state;
    }
}

export const initialState = {
    cart: [],
    saveForLater: []
}