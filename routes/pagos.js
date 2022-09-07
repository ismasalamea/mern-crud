const express = require('express');
const router = express.Router();
const RateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
//const stringCapitalizeName = require('string-capitalize-name');

const Pago = require('../models/pagos');

// Attempt to limit spam post requests for inserting data
const minutes = 5;
const postLimiter = new RateLimit({
  windowMs: minutes * 60 * 1000, // milliseconds
  max: 100, // Limit each IP to 100 requests per windowMs 
  delayMs: 0, // Disable delaying - full speed until the max limit is reached 
  handler: (req, res) => {
    res.status(429).json({ success: false, msg: `You made too many requests. Please try again after ${minutes} minutes.` });
  }
});

// READ (ONE)
router.get('/:id', (req, res) => {
  Pago.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json({ success: false, msg: `Pago no encontrado.` });
    });
});

// READ (ALL)
router.get('/', (req, res) => {
  Pago.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `Algo salio mal. ${err}` });
    });
});

// CREATE
router.post('/', postLimiter, (req, res) => {

  let newPago = new Pago({
    cedula:         req.body.cedula,
    fecha:          req.body.fecha,
    valor:          req.body.valor,
    estado:         req.body.estado
  });

  newPago.save()
    .then((result) => {
      res.json({
        success: true,
        msg: `Pago Agregado!`,
        result: {
          _id:      result._id,
          cedula:   result.cedula,
          fecha:    result.fecha,
          valor:    result.valor,
          estado:   result.estado
        }
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.errors) {
        if (err.errors.cedula) {
          res.status(400).json({ success: false, msg: err.errors.cedula.message });
          return;
        }
        if (err.errors.fecha) {
          res.status(400).json({ success: false, msg: err.errors.fecha.message });
          return;
        }
        if (err.errors.valor) {
          res.status(400).json({ success: false, msg: err.errors.valor.message });
          return;
        }
        if (err.errors.estado) {
          res.status(400).json({ success: false, msg: err.errors.estado.message });
          return;
        }
        // Show failed if all else fails for some reasons
        res.status(500).json({ success: false, msg: `Algo esta mal ${err}` });
      }
    });
});

// UPDATE
router.put('/:id', (req, res) => {


  let updatedPago = {
    fecha:          req.body.fecha,
    cedula:         req.body.cedula,
    valor:          req.body.valor,
    estado:         req.body.estado
  };

  Pago.findOneAndUpdate({ _id: req.params.id }, updatedPago, { runValidators: true, context: 'query' })
    .then((oldResult) => {
      Pago.findOne({ _id: req.params.id })
        .then((newResult) => {
          res.json({
            success: true,
            msg: `Pago Actualizado!`,
            result: 
            {
              _id:            newResult._id,
              cedula:         newResult.cedula,
              fecha:          newResult.fecha,
              valor:          newResult.valor,
              estado:         newResult.estado
            }
          });
        })
        .catch((err) => {
          res.status(500).json({ success: false, msg: `Algo saliooooo mal!. ${err}` });
          return;
        });
    })
    .catch((err) => {
      if (err.errors) {
        if (err.errors.cedula) {
          res.status(400).json({ success: false, msg: err.errors.cedula.message });
          return;
        }
        if (err.errors.fecha) {
          res.status(400).json({ success: false, msg: err.errors.fecha.message });
          return;
        }
        if (err.errors.valor) {
          res.status(400).json({ success: false, msg: err.errors.valor.message });
          return;
        }
        if (err.errors.estado) {
          res.status(400).json({ success: false, msg: err.errors.telefono.message });
          return;
        }
        // Show failed if all else fails for some reasons
        res.status(500).json({ success: false, msg: `Algo salios mal. ${err}` });
      }
    });
});

// DELETE
router.delete('/:id', (req, res) => {

  Pago.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.json({
        success: true,
        msg: `Pago eliminado.`,
        result: {
          _id:          result._id,
          cedula:       result.cedula,
          fecha:        result.fecha,
          valor:        result.valor,
          estado:       result.estado
        }
      });
    })
    .catch((err) => {
      res.status(404).json({ success: false, msg: 'Nada para eliminar.' });
    });
});

module.exports = router;
