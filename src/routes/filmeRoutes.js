const express = require('express');
const router = express.Router();

const filmeController = require('../controllers/filmeController');

router.get('/v1/controle-filmes/filme', filmeController.listarFilmes);
router.get('/v1/controle-filmes/filme/:id', filmeController.buscarFilmePorId);
router.get('/v1/controle-filmes/filtro/filme', filmeController.filtrarFilmes);

module.exports = router;