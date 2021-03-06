import express from 'express';
import {list,show,remove,update,create} from '../controllers/ProductsController';


const router = express.Router();

router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

export default router;