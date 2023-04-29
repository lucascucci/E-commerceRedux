import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { countDecrement, countIncrement,resetCount } from "../actions/cartActions";


const CounterItem = () => {

    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()



    return(
        <div>
            {counter}
            <button onClick={() => dispatch(countIncrement())}> + </button>
            <button onClick={() => dispatch(countDecrement())}> - </button>
            <button onClick={() => dispatch(resetCount())}> Reset </button>
        </div>
    )
}

export default CounterItem;