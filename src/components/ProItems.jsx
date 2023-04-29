


const ProItems = ({data, pushCart}) => {

    const { id ,name , price,} = data

    return(
        <div>
            <h1>{name}</h1>
            <h3><img className="img" src={data.url} alt="600"/></h3>
            <h2>{price}</h2>
            <button onClick={() => pushCart(id)}>Agregar</button>
        </div>
    )
}

export default ProItems;