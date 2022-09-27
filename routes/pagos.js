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
  Pago.f
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

// READ (BOVEDA)
router.get('/boveda/:bov', (req, res) => {
  Pago.find({ bovedapag: req.params.bov })
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
    bovedapag:         req.body.bovedapag,
    fechapag:          req.body.fechapag,
    fechasig:          req.body.fechasig,
    valorpag:          req.body.valorpag
  });

  newPago.save()
    .then((result) => {
      res.json({
        success: true,
        msg: `Pago Agregado!`,
        result: {
          _id:           result._id,
          bovedapag:     result.bovedapag,
          fechapag:      result.fechapag,
          fechasig:      result.fechasig,
          valorpag:      result.valorpag
        }
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.errors) {
        if (err.errors.bovedapag) {
          res.status(400).json({ success: false, msg: err.errors.bovedapag.message });
          return;
        }
        if (err.errors.fechapag) {
          res.status(400).json({ success: false, msg: err.errors.fechapag.message });
          return;
        }
        if (err.errors.fechasig) {
          res.status(400).json({ success: false, msg: err.errors.fechasig.message });
          return;
        }
        if (err.errors.valorpag) {
          res.status(400).json({ success: false, msg: err.errors.valorpag.message });
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
    bovedapag:         req.body.bovedapag,
    fechapag:          req.body.fechapag,
    fechasig:          req.body.fechasig,
    valorpag:          req.body.valorpag
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
              _id:              newResult._id,
              bovedapag:        newResult.bovedapag,
              fechapag:         newResult.fechapag,
              fechasig:         newResult.fechasig,
              valorpag:         newResult.valorpag
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
        if (err.errors.bovedapag) {
          res.status(400).json({ success: false, msg: err.errors.bovedapag.message });
          return;
        }
        if (err.errors.fechapag) {
          res.status(400).json({ success: false, msg: err.errors.fechapag.message });
          return;
        }
        if (err.errors.fechasig) {
          res.status(400).json({ success: false, msg: err.errors.fechasig.message });
          return;
        }
        if (err.errors.valorpag) {
          res.status(400).json({ success: false, msg: err.errors.valorpag.message });
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
          _id:             result._id,
          bovedapag:       result.bovedapag,
          fechapag:        result.fechapag,
          fechasig:        result.fechasig,
          valorpag:        result.valorpag
        }
      });
    })
    .catch((err) => {
      res.status(404).json({ success: false, msg: 'Nada para eliminar.' });
    });
});

module.exports = router;
