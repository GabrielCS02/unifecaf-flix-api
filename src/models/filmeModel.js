const prisma = require('../database/prismaClient');

async function listarTodos() {
    return await prisma.filme.findMany();
}

async function buscarPorId(id) {
    return await prisma.filme.findUnique({
        where: {
            id: Number(id)
        }
    });
}

async function filtrarPorNomeOuSinopse(nome) {
    return await prisma.filme.findMany({
        where: {
            OR: [
                {
                    nome: {
                        contains: nome
                    }
                },
                {
                    sinopse: {
                        contains: nome
                    }
                }
            ]
        }
    });
}

module.exports = {
    listarTodos,
    buscarPorId,
    filtrarPorNomeOuSinopse
};