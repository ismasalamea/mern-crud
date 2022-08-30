const express = require('express');
const router = express.Router();
const RateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
//const stringCapitalizeName = require('string-capitalize-name');

const User = require('../models/user');

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
  User.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json({ success: false, msg: `No such user.` });
    });
});

// READ (ALL)
router.get('/', (req, res) => {
  User.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `Algo salio mal. ${err}` });
    });
});

// CREATE
router.post('/', postLimiter, (req, res) => {

  let newUser = new User({
    boveda:         req.body.boveda,
    nombre:         req.body.nombre,
    apellido:       req.body.apellido,
    fecha:          req.body.fecha,
    cedula:         req.body.cedula,
    responsable:    req.body.responsable,
    telefono:       req.body.telefono,
    estado:         req.body.estado,
    valor:          req.body.valor,
    certificado:    req.body.certificado
  });

  newUser.save()
    .then((result) => {
      res.json({
        success: true,
        msg: `Registro Agregado!`,
        result: {
          _id:      result._id,
          boveda:   result.boveda,
          nombre:   result.nombre,
          apellido: result.apellido,
          fecha:    result.fecha,
          cedula:   result.cedula,
          responsable:   result.responsable,
          telefono:   result.telefono,     
          estado:   result.estado,
          valor: result.valor,
          certificado: result.certificado
        }
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.errors) {
        if (err.errors.boveda) {
          res.status(400).json({ success: false, msg: err.errors.boveda.message });
          return;
        }
        if (err.errors.nombre) {
          res.status(400).json({ success: false, msg: err.errors.nombre.message });
          return;
        }
        if (err.errors.apellido) {
          res.status(400).json({ success: false, msg: err.errors.apellido.message });
          return;
        }
        if (err.errors.fecha) {
          res.status(400).json({ success: false, msg: err.errors.fecha.message });
          return;
        }
        if (err.errors.cedula) {
          res.status(400).json({ success: false, msg: err.errors.cedula.message });
          return;
        }
        if (err.errors.responsable) {
          res.status(400).json({ success: false, msg: err.errors.responsable.message });
          return;
        }
        if (err.errors.telefono) {
          res.status(400).json({ success: false, msg: err.errors.telefono.message });
          return;
        }
        if (err.errors.estado) {
          res.status(400).json({ success: false, msg: err.errors.estado.message });
          return;
        }
        if (err.errors.valor) {
          res.status(400).json({ success: false, msg: err.errors.valor.message });
          return;
        }
        if (err.errors.certificado) {
          res.status(400).json({ success: false, msg: err.errors.certificado.message });
          return;
        }

        // Show failed if all else fails for some reasons
        res.status(500).json({ success: false, msg: `Algo esta mal ${err}` });
      }
    });
});

// UPDATE
router.put('/:id', (req, res) => {


  let updatedUser = {
    boveda:         req.body.boveda,
    nombre:         req.body.nombre,
    apellido:       req.body.apellido,
    fecha:          req.body.fecha,
    cedula:         req.body.cedula,
    responsable:    req.body.responsable,
    telefono:       req.body.telefono,
    estado:         req.body.estado,
    valor:          req.body.valor,
    certificado:          req.body.certificado
  };

  User.findOneAndUpdate({ _id: req.params.id }, updatedUser, { runValidators: true, context: 'query' })
    .then((oldResult) => {
      User.findOne({ _id: req.params.id })
        .then((newResult) => {
          res.json({
            success: true,
            msg: `Registro Actualizado!`,
            result: 
            {
              _id: newResult._id,
              boveda:         newResult.boveda,
              nombre:         newResult.nombre,
              apellido:       newResult.apellido,
              fecha:          newResult.fecha,
              cedula:         newResult.cedula,
              responsable:    newResult.responsable,
              telefono:       newResult.telefono,        
              estado:         newResult.estado,
              valor:          newResult.valor,
              certificado:          newResult.certificado
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
        if (err.errors.boveda) {
          res.status(400).json({ success: false, msg: err.errors.boveda.message });
          return;
        }
        if (err.errors.nombre) {
          res.status(400).json({ success: false, msg: err.errors.nombre.message });
          return;
        }
        if (err.errors.apellido) {
          res.status(400).json({ success: false, msg: err.errors.apellido.message });
          return;
        }
        if (err.errors.fecha) {
          res.status(400).json({ success: false, msg: err.errors.fecha.message });
          return;
        }
        if (err.errors.cedula) {
          res.status(400).json({ success: false, msg: err.errors.cedula.message });
          return;
        }
        if (err.errors.responsable) {
          res.status(400).json({ success: false, msg: err.errors.edad.message });
          return;
        }
        if (err.errors.telefono) {
          res.status(400).json({ success: false, msg: err.errors.telefono.message });
          return;
        }
        if (err.errors.estado) {
          res.status(400).json({ success: false, msg: err.errors.telefono.message });
          return;
        }
        if (err.errors.valor) {
          res.status(400).json({ success: false, msg: err.errors.valor.message });
          return;
        }
        if (err.errors.certificado) {
          res.status(400).json({ success: false, msg: err.errors.certificado.message });
          return;
        }

        // Show failed if all else fails for some reasons
        res.status(500).json({ success: false, msg: `Algo salios mal. ${err}` });
      }
    });
});

// DELETE
router.delete('/:id', (req, res) => {

  User.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.json({
        success: true,
        msg: `Registro eliminado.`,
        result: {
          _id:          result._id,
          boveda:       result.boveda,
          nombre:       result.nombre,
          apellido:     result.apellido,
          fecha:        result.fecha,
          cedula:       result.cedula,
          responsable:  result.responsable,
          telefono:     result.telefono,
          estado:       result.estado,
          valor:        result.valor,
          certificado:  result.certificado
        }
      });
    })
    .catch((err) => {
      res.status(404).json({ success: false, msg: 'Nada para eliminar.' });
    });
});

module.exports = router;
