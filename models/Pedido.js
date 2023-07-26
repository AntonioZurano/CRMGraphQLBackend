const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    pedido: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId, // Referencia a otro objeto
        required: true,
        ref: 'Cliente' // Referencia al modelo Cliente
    },
    vendedor: {
        type: mongoose.Schema.Types.ObjectId, // Referencia a otro objeto
        required: true,
        ref: 'Usuario' // Referencia al modelo Usuario
    },
    estado: {
        type: String,
        default: "PENDIENTE"
    },
    creado: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Pedido', ProductoSchema);