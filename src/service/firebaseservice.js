import { addDoc, collection, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";

export const getProducts = async () => {
    const prodCollection = collection(db, "Productos")
    const productos = await getDocs(prodCollection)
    return (productos.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
}

//Obtener un producto por id de la base de datos
export const getproductsbyid = async (id) => {  
    const prodDoc = doc(db, "Productos",id)
    const producto = await getDoc(prodDoc)
    return { id: producto.id, ...producto.data()}
}

//Agregar una orden a la base de datos
export const createOrder = async (newOrder) => {
    try{
        const orderCollection = collection(db,'Ordenes')
        const orderDoc = await addDoc(orderCollection, newOrder)
        return orderDoc
    } catch(error){
        throw new Error(error)
    }
}

//filtrar por categoria
export const getByCategoty = async categoty => {
    const prodCollection = collection(db,'Productos')
    const q = query(prodCollection, where('category','==',category)) 
    const productos = await getDocs(q)
    return (productos.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
}