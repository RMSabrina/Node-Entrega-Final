import { db } from '../config/firebase.config.js';
import { collection, getDocs, doc, getDoc, setDoc, addDoc, deleteDoc } from 'firebase/firestore';

const coleccionProductos = collection(db, 'products');

export const obtenerTodos = async () => {
    const listadoProductos = await getDocs(coleccionProductos);
    return listadoProductos.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

export const obtenerPorId = async (id) => {
    const productoRef = doc(db, 'products', id);
    const producto = await getDoc(productoRef);
    
    if (producto.exists()) {
        return { id: producto.id, ...producto.data() };
    }
    return null;
};

export const crearProducto = async (producto) => {
    const productoRef = doc(db, 'products', producto.id);
    
    const productoExistente = await getDoc(productoRef);

    if (productoExistente.exists()) {
        return null;
    }

    await setDoc(productoRef, {
        categoria: producto.categoria,
        origen: producto.origen,
        precio: producto.precio,
        descripcion: producto.descripcion,
        marca: producto.marca,
        nombre: producto.nombre
    });

    return {
        id: producto.id,
        ...producto
    };
};

export const eliminarProducto = async (id) => {
    const productoRef = doc(db, 'products', id);
    const producto = await getDoc(productoRef);
    
    if (!producto.exists()) return false; // El producto no existe en Firestore
    
    await deleteDoc(productoRef);
    return true;
};