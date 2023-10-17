import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './producto.css';
import { Link } from 'react-router-dom';


const Producto = ({rutaImagen, nombreProducto, infoProducto, stockProducto, itemId}) => {
    return (
    <div class="card" style={{width: '18rem'}}>
        <img src={rutaImagen} class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">{nombreProducto}</h5>
        <p class="card-text">{infoProducto}</p>
        <p class="card-text">Stock: {stockProducto}</p>
        <Link to={`/item/${itemId}`} className="btn btn-success">Más información</Link>
    </div>
    </div>
    )
}


export default Producto;
