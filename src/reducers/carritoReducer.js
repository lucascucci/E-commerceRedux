import {
    DELETE_ONE_CART,
    DELETE_ALL,
    CLEAR_CART,
    PUSH_CART
} from "../Types";

export const initialState = {
    products: [
        { id: 1, name: 'Producto1', price: 200, url : 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
        { id: 2, name: 'Producto2', price: 1000, url : 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' },
        { id: 3, name: 'Producto3', price: 2220, url : 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'},
        { id: 4, name: 'Producto4', price: 1000, url : 'https://rickandmortyapi.com/api/character/avatar/5.jpeg' },
        { id: 5, name: 'Producto5', price: 400, url : 'https://rickandmortyapi.com/api/character/avatar/6.jpeg' },
        { id: 6, name: 'Producto6', price: 200, url : 'https://rickandmortyapi.com/api/character/avatar/8.jpeg' },
    ],
    cart: []
}


export default function carritoReducer (state = initialState,action){
    switch(action.type){
        case PUSH_CART:{
            let nuevoItem = state.products.find((product)=> product.id === action.payload)
            let itemEncarro = state.cart.find((item)=> item.id === nuevoItem.id)
            return itemEncarro
            ?{...state, cart: state.cart.map(item => item.id === nuevoItem.id ? {...item, cantidad: item.cantidad + 1} : item)}
            :{...state, cart: [...state.cart, {...nuevoItem, cantidad: 1}] }
        }
        case DELETE_ALL : {
            return{
                ...state,
                cart: state.cart.filter((item)=> item.id !== action.payload)
            }
        }
        case DELETE_ONE_CART: {
            let itemBorrado = state.cart.find((item)=> item.id === action.payload)
            return itemBorrado.cantidad > 1
            ? {...state, cart: state.cart.map((item => item.id === action.payload ? {
                ...item,cantidad: item.cantidad -1 } : item ))} : {
                    ...state,cart: state.cart.filter((item) => item.id !== action.payload)
                }
        }
        case CLEAR_CART: return initialState
        default: return state
    }
}