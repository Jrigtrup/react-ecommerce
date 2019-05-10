import {createStore} from 'redux'

function reducer(state, action) {
    switch(action.type){
        case 'SET_PRODUCTS' :
            return {
                ...state,
                products: action.products
            }
        case 'ADD_TO_CART' :
            const newCart = [...state.cart]
            newCart.push(action.product)
            return {
                ...state,
                cart: newCart
            }
        default:
            return state
    }
}
const initialState = {
    products: [],
    cart: []
}

const store = createStore(reducer, initialState) 

export default store;