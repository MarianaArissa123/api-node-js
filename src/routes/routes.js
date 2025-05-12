const express = require('express'); 
const router = express.Router(); 

const autoresController = require('../controllers/autores'); 
const generosController = require('../controllers/generos'); 

router.get('/autores', autoresController.listarAutores); 
router.post('/autores/:id', autoresController.cadastrarAutores); 
router.patch('/autores', autoresController.editarAutores); 
router.delete('/autores', autoresController.apagarAutores); 

router.get('/generos', generosController.listarGeneros); 
router.post('/generos', generosController.cadastrarGeneros); 
router.patch('/generos', generosController.editarGeneros); 
router.delete('/generos', generosController.apagarGeneros); 



module.exports = router;