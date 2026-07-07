import dotenv from 'dotenv';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './config/firebase.config.js'; // Importamos tu conexión a la DB

// Cargar variables de entorno
dotenv.config();

const productosBeauty = [
  {
    "nombre": "Sérum Hyaluronic 4D",
    "marca": "Lidherma",
    "categoria": "Skincare",
    "precio": 18200,
    "descripcion": "Sérum con efecto relleno que combina cuatro tipos de ácido hialurónico para hidratar profundamente y mejorar la elasticidad de la piel.",
    "origen": "Nacional"
  },
  {
    "nombre": "Limpiador Hidratante para Piel Normal a Seca",
    "marca": "CeraVe",
    "categoria": "Skincare",
    "precio": 15400,
    "descripcion": "Loción limpiadora sin espuma que elimina suavemente la suciedad y la grasa mientras aumenta la hidratación de la piel. Contiene ceramidas esenciales.",
    "origen": "Internacional"
  },
  {
    "nombre": "Protector Solar Anthelios UVmune 400 Fluido Invisible",
    "marca": "La Roche-Posay",
    "categoria": "Skincare",
    "precio": 24900,
    "descripcion": "Protector solar facial de muy alta protección (FPS 50+) con textura ultra ligera y acabado invisible, resistente al agua y al sudor.",
    "origen": "Internacional"
  },
  {
    "nombre": "Máscara Facial Extra Hidratante Volcánica",
    "marca": "ACF",
    "categoria": "Skincare",
    "precio": 3500,
    "descripcion": "Mascarilla de tela de un solo uso formulada con agua volcánica y ácido hialurónico para un shock de hidratación instantáneo.",
    "origen": "Nacional"
  },
  {
    "nombre": "Niacinamide 10% + Zinc 1%",
    "marca": "The Ordinary",
    "categoria": "Skincare",
    "precio": 14000,
    "descripcion": "Sérum de alta concentración que ayuda a reducir la aparición de imperfecciones y la congestión cutánea, equilibrando la producción de sebo.",
    "origen": "Internacional"
  },
  {
    "nombre": "Base de Maquillaje Studio Fix Fluid FPS 15",
    "marca": "MAC Cosmetics",
    "categoria": "Belleza",
    "precio": 45000,
    "descripcion": "Base líquida de cobertura media a total construible, con acabado mate natural que controla el brillo y dura hasta 24 horas.",
    "origen": "Internacional"
  },
  {
    "nombre": "Sérum Iluminador Vitamina C",
    "marca": "TodoModa Beauty",
    "categoria": "Skincare",
    "precio": 6800,
    "descripcion": "Sérum facial de uso diario que aporta luminosidad, unifica el tono de la piel y tiene acción antioxidante. Fórmula vegana y cruelty free.",
    "origen": "Nacional"
  },
  {
    "nombre": "Hydro Boost Water Gel",
    "marca": "Neutrogena",
    "categoria": "Skincare",
    "precio": 14800,
    "descripcion": "Gel hidratante con ácido hialurónico que renueva los niveles de agua en la piel y fortalece su barrera natural. Textura ultra ligera sin sensación grasa.",
    "origen": "Internacional"
  },
  {
    "nombre": "Agua Micelar Todo en 1 en pieles sensibles",
    "marca": "Garnier",
    "categoria": "Skincare",
    "precio": 8500,
    "descripcion": "Limpiador facial que desmaquilla, limpia y tolera todo el rostro en un solo gesto sin necesidad de enjuague. Captura las impurezas como un imán.",
    "origen": "Internacional"
  },
  {
    "nombre": "Crema Facial Antiage Fango Termal",
    "marca": "Caviahue",
    "categoria": "Skincare",
    "precio": 19500,
    "descripcion": "Crema nutritiva de noche formulada con fango termal y péptidos. Estimula la regeneración celular y disminuye líneas de expresión.",
    "origen": "Nacional"
  },
  {
    "nombre": "Minéral 89 Booster Diario Fortificante",
    "marca": "Vichy",
    "categoria": "Skincare",
    "precio": 29000,
    "descripcion": "Concentrado fortificante con 89% de agua termal mineralizante y ácido hialurónico. Refuerza la función barrera de la piel contra agresores externos.",
    "origen": "Internacional"
  },
  {
    "nombre": "Corrector de Ojeras e Imperfecciones Fit Me",
    "marca": "Maybelline",
    "categoria": "Belleza",
    "precio": 11000,
    "descripcion": "Corrector líquido de cobertura natural que disimula rojeces e imperfecciones logrando una piel uniforme sin obstruir los poros.",
    "origen": "Internacional"
  },
  {
    "nombre": "Protector Solar Facial Toque Seco FPS 50+",
    "marca": "Rayito de Sol",
    "categoria": "Skincare",
    "precio": 13200,
    "descripcion": "Protección solar alta con efecto matificante continuo. Previene manchas solares y quemaduras, de rápida absorción.",
    "origen": "Nacional"
  },
  {
    "nombre": "Crema Anti-arrugas con Ácido Hialurónico",
    "marca": "Tortulan",
    "categoria": "Skincare",
    "precio": 7200,
    "descripcion": "Crema de hidratación profunda que ayuda a disminuir la profundidad de las arrugas y mejora la firmeza del rostro. Testeada dermatológicamente.",
    "origen": "Nacional"
  }
];

const ejecutarMigracion = async () => {
    console.log('*** Iniciando la carga de datos en Firestore... ***\n');
    
    // Declaramos nuestra variable contador arrancando en 2
    let idActual = 2; 

    for (const producto of productosBeauty) {
        try {
            // Firestore requiere que el ID sea siempre un String, por eso usamos .toString()
            const docId = idActual.toString();
            
            // Creamos la referencia al documento exacto apuntando a la colección 'products' y al ID manual
            const docRef = doc(db, 'products', docId);
            
            // setDoc guarda la información en esa referencia exacta
            await setDoc(docRef, producto);
            
            console.log(`Insertado: ${producto.nombre} -> ID: ${docId}`);
            
            idActual++;
            
        } catch (error) {
            console.error(`Error al insertar "${producto.nombre}":`, error.message);
        }
    }
    
    console.log('\n*** Proceso de carga finalizado con éxito. ***');
    process.exit(0);
};

ejecutarMigracion();