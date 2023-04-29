import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    RESET,
    PUSH_CART,
    DELETE_ONE_CART,
    DELETE_ALL,
    CLEAR_CART
} from '../Types'


//contador
export const countIncrement = () => ({type:INCREMENT_COUNT})
export const countDecrement = () => ({type:DECREMENT_COUNT})
export const resetCount = () => ({type:RESET})

//accciones del carrito

export const pushCart = (id) => ({type:PUSH_CART, payload:id})



export const removeAllProd = (id, all= false) =>
all
    ?{type:DELETE_ALL, payload:id}
    :{type:DELETE_ONE_CART, payload:id}

export const clearCart = () => ({type: CLEAR_CART})