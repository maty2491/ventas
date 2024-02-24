import ventas from "/public/assets/homero.png"

const Inicio = () => {
  return (
    <div className='container'>
        <h1 className="text-warning text-center">Bienvenidos a la web de ventas</h1>
        <img src={ventas} className='img-fluid rounded d-flex mx-auto' alt="" />

    </div>
  )
}

export default Inicio