import {combineReducers} from "redux";
import contadorReducer from "./contadorReducer";
import carritoReducer from './carritoReducer';



const rootReducer = combineReducers({

    shopping: carritoReducer,
    counter: contadorReducer,


    
})


export default rootReducer;