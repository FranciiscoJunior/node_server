import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    res.status(200).json({oK: 'Conectado com sucesso!'})
})

export default routes;