

const CarroItem = ({removeAllFromCarro , delOneFromCarro , data }) => {

    const {id , name, price , cantidad}= data;




    return(
<>

        <div>
            
            <h1></h1>
            <h1>{name}</h1>
            <h3><img className="img" src={data.url} alt="600"/></h3>
            <h5>${price}.00 x {cantidad} = {price * cantidad}.00</h5>
            <button onClick={() => removeAllFromCarro(id)}> Eliminar Todos</button>
            <button onClick={() => delOneFromCarro(id, true)}>Eliminar uno </button>
        </div>
        </>
    )



}

export default CarroItem;

