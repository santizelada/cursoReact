import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Producto from './Producto';
import HCsuit from '../Img/HCSuit.jpg';
import CBsuit from '../Img/CBsuit.jpg';
import jLawSuit from '../Img/jLawSuit.jpg';
import LGsuit from '../Img/LGsuit.jpg';
import JDsuit from '../Img/JDsuit.jpg'

const productos = [
  {
    id: 1,
    nombre: "CB suit",
    info: "Gris oscuro, elegante y versátil para ocasiones formales.",
    stock: 11,
    categoria: "trajes grises",
  },
  {
    id: 2,
    nombre: "HC suit",
    info: "Gris claro, ideal para bodas al aire libre.",
    stock: 12,
    categoria: "trajes grises",
  },
  {
    id: 3,
    nombre: "JLaw suit",
    info: "Azul oscuro, clásico y sofisticado para negocios y bodas.",
    stock: 8,
    categoria: "trajes azules",
  },
  {
    id: 4,
    nombre: "LG suit",
    info: "Negro, la elección más elegante para eventos de etiqueta.",
    stock: 10,
    categoria: "trajes negros",
  },
  {
    id: 5,
    nombre: "JD suit",
    info: "Azul marino, fresco y moderno para eventos nocturnos.",
    stock: 15,
    categoria: "trajes azules",
  }
];

const imagenesProductos = {
  "CB suit": HCsuit,
  "HC suit": CBsuit,
  "JLaw suit": jLawSuit,
  "LG suit": LGsuit,
  "JD suit": JDsuit,
};

export default function Catalogo() {
  const { categoryId } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryId === "all") {
      setProductosFiltrados(productos);
    } else {
      const filteredProducts = productos.filter(
        (producto) => producto.categoria === categoryId
      );
      setProductosFiltrados(filteredProducts);
    }
  }, [categoryId]);

  const handleCategoryChange = (newCategoryId) => {
    navigate(`/category/${newCategoryId}`);
  };

  return (
    <div>
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange("all")}>Todos</button>
        <button onClick={() => handleCategoryChange("trajes azules")}>
          Trajes Azules
        </button>
        <button onClick={() => handleCategoryChange("trajes grises")}>
          Trajes Grises
        </button>
        <button onClick={() => handleCategoryChange("trajes negros")}>
          Trajes Negros
        </button>
      </div>
      <div className="row d-flex">
        {productosFiltrados.map((producto) => (
          <Producto
            key={producto.id}
            nombreProducto={producto.nombre}
            infoProducto={producto.info}
            stockProducto={producto.stock}
            rutaImagen={imagenesProductos[producto.nombre]}
          />
        ))}
      </div>
    </div>
  );
}