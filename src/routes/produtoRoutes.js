import { Router } from 'express';
import {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    excluirProduto
} from '../controllers/produtoController.js';

const router = Router();
//Busacr todos os produtos
router.get('/', listarProdutos);
// Buscar um produto pelo ID
router.get('/:id', buscarProdutoPorId);
// Criar um novo produto
router.post('/', criarProduto);
//Atualiza um produto existente
router.put('/:id', atualizarProduto);
// Excluir um produto existente
router.delete('/:id', excluirProduto);

export default router;