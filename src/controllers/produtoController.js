import { 
    listarTodos,
    buscarPorId,
    criar,
    atualizar,
    excluir
} from '../services/produtoService.js';

export async function listarProdutos(req, res) {
    try {
        const produtos = await listarTodos();
        res.json(produtos);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro ao buscar produtos'
        });
    }
}

export async function buscarProdutoPorId(req, res) {
    console.log('Entrei na função buscarProdutoPorId');

    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: 'ID inválido'
        });
    }
    try {
        const produto = await buscarPorId(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado'
            });
        }

        res.json(produto);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro ao buscar produto'
        });
    }
}


export async function criarProduto(req, res) {
    try {
        const { nome, quantidade } = req.body;

        if (
            typeof nome !== 'string' ||
            !nome.trim() ||
            quantidade === undefined ||
            !Number.isInteger(quantidade) ||
            quantidade < 0
        ) {
            return res.status(400).json({
                mensagem: 'Informe um nome válido e uma quantidade inteira não negativa'
            });
        }

        const produto = await criar({
            nome,
            quantidade
        });

        res.status(201).json(produto);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro ao cadastrar produto'
        });
    }
}


export async function atualizarProduto(req, res) {
    const id = Number(req.params.id);
    const { nome, quantidade } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: 'ID inválido'
        });
    }

    if (
        typeof nome !== 'string' ||
        !nome.trim() ||
        !Number.isInteger(quantidade) ||
        quantidade < 0
    ) {
        return res.status(400).json({
            mensagem: 'Informe um nome válido e uma quantidade inteira não negativa'
        });
    }

    
try {
    const produto = await atualizar(id, {
        nome,
        quantidade
    });

    res.status(200).json({
        mensagem: 'Produto atualizado com sucesso!',
        produto: produto
    });
} catch (erro) {
    if (erro.code === 'P2025') {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    console.error(erro);
    res.status(500).json({
        mensagem: 'Erro ao atualizar produto'
    });
}
}


export async function excluirProduto(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: 'ID inválido'
        });
    }

    try {
        await excluir(id);

        res.json({
            mensagem: 'Produto excluído com sucesso'
        });
    } catch (erro) {
        if (erro.code === 'P2025') {
            return res.status(404).json({
                mensagem: 'Produto não encontrado'
            });
        }

        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro ao excluir produto'
        });
    }
}
