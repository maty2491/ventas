import ventas from "/assets/homero.png"
import { Link } from 'react-router-dom';
const Inicio = () => {
    return (
        <div className='container-fluid'>
            <div className="jumbotron">
                <img src={ventas} className='img-fluid rounded d-flex mx-auto' alt="" />
                <h1 className="display-4 text-warning">Hey Don Gaston, llevate el vasón!</h1>
                <p className="lead">Bienvenido a la tienda de venta rápida de artículos para el hogar, por favor tenga en cuenta que esta hecho todo a pulmon y para la comodidad del usuario.</p>
                <hr className="my-4" />
                <p className="mb-5">Ante cualquier consulta no dude en contactarse con nosotros</p>
                <Link to="/utensillos" className="boton mr-2 ">UTENSILLOS</Link>
                <Link to="/muebles" className="boton mr-2">MUEBLES</Link>
            </div>
        </div>
    )
}

export default Inicio