const router = require('express').Router()

const userController = require("../controllers/userController")

router.post('/user', userController.createUser);
router.get('/user', userController.getAllUsers);
router.put('/user', userController.updateUser);
router.delete('/user/:cpf', userController.deleteUser);

const organizadorController = require("../controllers/organizadorController")

router.post('/organizador', organizadorController.createOrganizador);
router.get('/organizador', organizadorController.getAllOrganizador);
router.put('/organizador', organizadorController.updateOrganizador);
router.delete('/organizador/:id', organizadorController.deleteOrganizador);


const ingressoController = require("../controllers/ingressoController")
//Rotas ingresso controler
router.post('/ingresso', ingressoController.createIngresso);
router.get('/ingresso', ingressoController.getAllIngresso);
router.put('/ingresso', ingressoController.updateIngresso);
router.delete('/ingresso/:id',ingressoController.deleteIngresso);


//rotas eventoController
const eventoController = require("../controllers/eventoController")
router.post('/evento', eventoController.createEvento);
router.get('/evento', eventoController.getAllEventos);
router.put('/evento', eventoController.updateEvento);
router.delete('/evento/:id', eventoController.deleteEvento);
router.get('/evento/data', eventoController.getEventosPorData);
router.get('/evento/proximo', eventoController.getEventosdia);
module.exports = router