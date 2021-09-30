import express from "express";
import { getAllSuratKeluar, insertSuratKeluar, getSKById } from "../controllers/SKController.js";

const router = express.Router();

router.get('/suratkeluar', getAllSuratKeluar);
router.get('/suratkeluar/:id', getSKById);
router.post('/suratkeluar', insertSuratKeluar);

export default router;