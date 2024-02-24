import { useEffect, useState } from 'react';
import { products } from '../db/db.json';

const Utensillos = () => {
    useEffect(() => {
        console.log(products);
    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <div className='container'>
                <div className='row'>
                {products.utensillos.map(product => (
                    <div className='col-lg-4' key={product.id}>
                        <div className="card mt-5">
                            <div className="card-body">
                                <img src={`/assets/${product.imagen}`} className='img-fluid rounded mx-auto d-block img-mediana'  alt="" />
                                <h4 className="card-title text-warning text-center">{product.nombre}</h4>                                
                                <p className="card-text">{product.descripcion}</p>
                                <p className='card-text'>$ {product.precio}</p>                                
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default Utensillos;
