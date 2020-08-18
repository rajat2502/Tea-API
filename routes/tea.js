const express = require('express');
const teaController = require('../controllers/tea');

const router = express.Router();

router
  .route('/')
  .get(teaController.getAllTea)
  .post(teaController.addTea)
  .delete(teaController.deleteAllTea);

router
  .route('/:name')
  .get(teaController.getOneTea)
  .post(teaController.addNewComment)
  .delete(teaController.deleteOneTea);

module.exports = router;
