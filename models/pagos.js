const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

// Define the database model
const PagoSchema = new mongoose.Schema({
  codboveda: {
    type: String,
    required: [true, 'Codigo es obligatorio.'],
  },  
  bovedapag: {
    type: String,
    required: [true, 'Boveda es obligatorio.'],
  },
  numero_fac: {
    type: String,
    required: [true, 'Factura es obligatorio.'],
  },
  fechapag: {
    type: Date,
    required: [true, 'Fecha Pago es requerido.']
  },
  fechasig: {
    type: Date,
    required: [true, 'Fecha Siguiente es requerido.']
  },
  valorpag: {
    type: Number,
    required: [true, 'Valor Pago es requerido.'],
    default: 0
  },
  tipo: {
    type: String,
    required: [true, 'Tipo es obligatorio.'],
  },

});

// Use the unique validator plugin
PagoSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const Pago = module.exports = mongoose.model('pagos', PagoSchema);
