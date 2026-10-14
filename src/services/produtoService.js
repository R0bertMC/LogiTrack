import prisma from '../lib/prisma.js';

export async function listarTodos() {
    return await prisma.produto.findMany();
}

export async function buscarPorId(id) {
    return await prisma.produto.findUnique({
        where: { id }
    });
}

export async function criar(dados) {
    return await prisma.produto.create({
        data: dados
    });
}

export async function atualizar(id, dados) {
    return await prisma.produto.update({
        where: { id },
        data: dados
    });
}

export async function excluir(id) {
    return await prisma.produto.delete({
        where: { id }
    });
}
