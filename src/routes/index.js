import { Router } from "express";
import ProductRoute from "./productRoutes.js";
import UserRoute from "./userRoutes.js";
import CartRoute from "./cartRoutes.js";
import MessageRoute from "./messageRoutes.js";
import HomeRouter from "./homeRoute.js";
import ChatRoute from './chatRoute.js';
import OrderRoute from "./orderRoutes.js";

const router = Router();

const userRoute = new UserRoute();
const productRoute = new ProductRoute();
const cartRoute = new CartRoute();
const orderRoute = new OrderRoute();
const messageRoute = new MessageRoute();
const homeRouter = new HomeRouter();
const chatRoute = new ChatRoute();

//Acceso a las rutas
router.use("/", homeRouter.init()); // ruta vista Home
router.use("/auth", userRoute.init()); // ruta para el registro y autenticación de usuarios
router.use("/productos", productRoute.init()); // ruta de productos
router.use("/carrito", cartRoute.init()); // ruta carrito de compras
router.use("/ordenes", orderRoute.init()); // ruta ordenes de compra
router.use("/chat", messageRoute.init()); // ruta mensajes del chat
router.use('/mensajes',chatRoute.init()); // ruta para la vista de los mensajes utilizando websockets 
export default router;
