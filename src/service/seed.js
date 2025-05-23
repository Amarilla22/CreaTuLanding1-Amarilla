import { addDoc, collection, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";

const productos = [
  {
    "marca": "AMD",
    "categoria": "Procesadores",
    "nombre": "Ryzen 5 5600X",
    "precio": 150,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "AMD",
    "categoria": "Procesadores",
    "nombre": "Ryzen 7 5800X",
    "precio": 280,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "AMD",
    "categoria": "Placas",
    "nombre": "ASUS B550",
    "precio": 120,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "AMD",
    "categoria": "Placas",
    "nombre": "MSI X570",
    "precio": 200,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "AMD",
    "categoria": "Graficas",
    "nombre": "Radeon RX 6600",
    "precio": 250,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "AMD",
    "categoria": "Graficas",
    "nombre": "Radeon RX 6700 XT",
    "precio": 400,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "Intel",
    "categoria": "Procesadores",
    "nombre": "Core i5 12400F",
    "precio": 170,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "Intel",
    "categoria": "Procesadores",
    "nombre": "Core i7 12700K",
    "precio": 320,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "Intel",
    "categoria": "Placas",
    "nombre": "Gigabyte B660M",
    "precio": 130,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "Intel",
    "categoria": "Placas",
    "nombre": "ASRock Z690",
    "precio": 220,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "Intel",
    "categoria": "Graficas",
    "nombre": "Intel Arc A750",
    "precio": 230,
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "marca": "Intel",
    "categoria": "Graficas",
    "nombre": "Intel Arc A770",
    "precio": 290,
    "imagen": "https://via.placeholder.com/150"
  }
]



export const subirProductos = async () => {
  const productosRef = collection(db, "productos");
  for (const producto of productos) {
    try {
      await addDoc(productosRef, producto);
      console.log(`✅ "${producto.nombre}" subido correctamente`);
    } catch (error) {
      console.error(`❌ Error al subir ${producto.nombre}:`, error);
    }
  }
};

