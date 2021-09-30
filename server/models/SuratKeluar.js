import mongoose from "mongoose";

const SuratKeluar = mongoose.Schema({
    tanggal: {
        type: Date,
        required: true
    },
    nomor: {
        type: String,
        required: true
    },
    keterangan: {
        type: String,
        required: true
    },
    kepada: {
        type: String,
        required: true
    }
})

export default mongoose.model('SuratKeluar', SuratKeluar)