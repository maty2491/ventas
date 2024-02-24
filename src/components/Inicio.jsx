import ventas from "/assets/homero.png"

const Inicio = () => {
    return (
        <div className='container'>
            
            <h1 className="text-warning text-center">"Hey Don Gaston, llevate el vasón!</h1>
            <h2 className="text-center">Tienda de venta rapida de articulos para el hogar</h2>
            
            <img src={ventas} className='img-fluid rounded d-flex mx-auto' alt="" />

        </div>
    )
}

export default Inicio