import {useSelector, useDispatch} from 'react-redux';
import {
    clearCart, pushCart, removeAllProd
} from '../actions/cartActions';
import ProItems from './ProItems';
import CarroItem from './CarroItem';

const ShoppingCarro = () => {

    const state = useSelector (state => state)
    const {products, cart} = state.shopping
    const  dispatch = useDispatch();


    return(
    <div>
        <h1>
            Listado de productos
        </h1>
        <h2>
            Seleccion de productos
        </h2>
            <div>
                {
                    products.map((products)=> (
                        <ProItems key={products.id} data={products} pushCart={()=> dispatch(pushCart(products.id))}/>
                    ))
                }
            </div>
            <div>
                <button onClick={() => dispatch(clearCart())}>Vaciar Carro</button>
                <div>Listado del CARRO</div>
                {
                    cart.map ((item,index) => (
                        <CarroItem key={index} data={item}
                        delOneFromCarro={()=> dispatch(removeAllProd(item.id))}
                        removeAllFromCarro={() => dispatch(removeAllProd(item.id, true))}
                        />
                    ))
                }
            </div>
    </div>



        )

}

export default ShoppingCarro;