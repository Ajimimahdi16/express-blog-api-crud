const express= require('express');
const router= express.Router();
const bachecaController = require('../controllers/bachecaController');

router.get('/', bachecaController.index);
router.get('/:id', bachecaController.show);
router.post('/', bachecaController.store);
router.put('/:id', bachecaController.update);
router.patch('/:id', bachecaController.modify);
router.delete('/:id', bachecaController.destroy);


module.exports = router;