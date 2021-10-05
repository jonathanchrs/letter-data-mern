import SuratKeluar from "../models/SuratKeluar.js";

export const getAllSuratKeluar = async (req, res) => {
    try {
        const suratKeluar = await SuratKeluar.find();
        res.status(200).json(suratKeluar);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const getSKById = async (req, res) => {
    try {
        const suratKeluar = await SuratKeluar.findById(req.params.id);
        res.json(suratKeluar);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export const insertSuratKeluar = async (req, res) => {
    const suratKeluar = new SuratKeluar(req.body);

    try {
        const savedSK = await suratKeluar.save();
        res.status(201).json(savedSK);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const getTotalLetter = async (req, res) => {
    try {
        const totalSk = await SuratKeluar.count();
        res.status(200).json({total: totalSk});
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}