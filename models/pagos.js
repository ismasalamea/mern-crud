const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const nombreValidador = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Nombre no debe exceder {ARGS[1]} caracteres.'
  })
];

// Define the database model
const PagoSchema = new mongoose.Schema({
  cedula:{
    type: String,
    required: [true, 'Cedula es obligatorio.'],
  },
  fecha: {
    type: Date,
    required: [true, 'Fecha es requerido.']
  },
  valor: {
    type: Number,
    required: [true, 'Valor es requerido.'],
    default: 0
  },
  estado: {
    type: Boolean,
    default:true,
    required:[true, 'Estado es requerido.'],
  },

});

// Use the unique validator plugin
PagoSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const Pago = module.exports = mongoose.model('pagos', PagoSchema);
