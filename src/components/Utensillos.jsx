import { useEffect, useState } from 'react';
import { products } from '../db/db.json';

const Utensillos = () => {
    useEffect(() => {
        console.log(products);
    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <div className='container mb-5'>
                    <h1 className='text-center mt-5'>UTENSILLOS</h1>
                <div className='row'>
                {products.utensillos.map(product => (
                    <div className='col-lg-4 col-md-4 col-sm-6 ' key={product.id}>
                        <div className="card mt-5 mb-5">
                                <img src={`/assets/${product.imagen}`} className='img-fluid border img-mediana'  alt="" />
                            <div className="card-body mb-5 text-center">
                                <h2 className="card-title text-warning text-center">{product.nombre}</h2>                                
                                <p className="card-text text-center">{product.descripcion}</p>
                                <p className='card-text text-center font-weight-bold '>$ {product.precio}</p>                                
                                <a className='boton ' href="https://ig.me/m/eydongaston" target="_blank" rel="noopener noreferrer">Comprar</a>                          
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
