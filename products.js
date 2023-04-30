import ensaladas from "./img/products/ensaladas.png";
import migas from "./img/products/triangulo.png";
import bandejaChica from "./img/products/bandeja-chica.png";
import bandejaGrande from "./img/products/bandeja-grande.png";
import pebete from "./img/products/pebete.png";

export const products = [
  {
    name: "ENSALADA DE FRUTAS",
    items: [
      {
        price: 300,
        image: ensaladas,
      },
    ],
  },
  {
    name: "SANDWICH DE MIGA",
    items: [
      {
        price: 300,
        image: migas,
      },
      {
        price: 700,
        image: bandejaChica,
        info: ["x6"],
      },
      {
        price: 2800,
        image: bandejaGrande,
        info: ["x24", "x32"],
      },
    ],
  },
  {
    name: "PEBETE",
    items: [
      {
        price: 300,
        image,
      },
    ],
  },
];
