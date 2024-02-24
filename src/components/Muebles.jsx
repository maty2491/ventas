import { useEffect, useState } from 'react';
import { products } from '../db/db.json';

const Muebles = () => {
  return (
    <>
    <div className='container'>
            <h1 className='text-center mt-5'>MUEBLES</h1>
        <div className='row'>
        {products.muebles.map(product => (
            <div className='col-lg-4 col-md-4 col-sm-6' key={product.id}>
                <div className="card mt-5">
                        <img src={`/assets/${product.imagen}`} className='img-fluid rounded img-mediana'  alt="" />
                    <div className="card-body">
                        <h2 className="card-title text-warning text-center">{product.nombre}</h2>                                
                        <p className="card-text text-center">{product.descripcion}</p>
                        <p className='card-text text-center font-weight-bold'>$ {product.precio}</p>                                
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
</>
  )
}

export default Muebles