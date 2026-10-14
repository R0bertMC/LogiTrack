import express from 'express';
import prisma from './lib/prisma.js';
import produtoRoutes from './routes/produtoRoutes.js';

const app = express();

app.use(express.json());
app.use('/produtos', produtoRoutes);

app.get('/', (req, res) => {
    res.send('API LogiTrack funcionando!');
});

const servidor = app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// Encerrar conexões corretamente ao parar o servidor
async function encerrar() {
    servidor.close(async () => {
        await prisma.$disconnect();
        process.exit(0);
    });
}

process.on('SIGINT', encerrar);
process.on('SIGTERM', encerrar);