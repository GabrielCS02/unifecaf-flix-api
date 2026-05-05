const filmeModel = require("../models/filmeModel");

async function listarFilmes(req, res) {
  try {
    const filmes = await filmeModel.listarTodos();

    return res.status(200).json({
      status: true,
      quantidade: filmes.length,
      filmes,
    });
  } catch (error) {
    console.error("Erro ao listar filmes:", error);

    return res.status(500).json({
      status: false,
      mensagem: "Erro interno ao listar filmes.",
    });
  }
}

async function buscarFilmePorId(req, res) {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({
        status: false,
        mensagem: "O ID informado é inválido.",
      });
    }

    const filme = await filmeModel.buscarPorId(id);

    if (!filme) {
      return res.status(404).json({
        status: false,
        mensagem: "Filme não encontrado.",
      });
    }

    return res.status(200).json({
      status: true,
      filme,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      mensagem: "Erro interno ao buscar filme.",
    });
  }
}

async function filtrarFilmes(req, res) {
  try {
    const { nome } = req.query;

    if (!nome || nome.trim() === "") {
      return res.status(400).json({
        status: false,
        mensagem: "O parâmetro nome é obrigatório.",
      });
    }

    const filmes = await filmeModel.filtrarPorNomeOuSinopse(nome);

    if (filmes.length === 0) {
      return res.status(404).json({
        status: false,
        mensagem: "Nenhum filme encontrado para o filtro informado.",
      });
    }

    return res.status(200).json({
      status: true,
      quantidade: filmes.length,
      filmes,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      mensagem: "Erro interno ao filtrar filmes.",
    });
  }
}

module.exports = {
  listarFilmes,
  buscarFilmePorId,
  filtrarFilmes,
};
