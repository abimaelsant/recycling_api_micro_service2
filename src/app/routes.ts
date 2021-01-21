import { Router, Request, Response } from 'express';
import RecycledProductController from './controller/RecycledProductController';

const routes = Router();

const recycledProductController = new RecycledProductController();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World to Micro Service 2!' })
});


routes.get('/recycled-products', recycledProductController.index);
routes.get('/recycled-products/:id', recycledProductController.show);
routes.post('/recycled-products', recycledProductController.store);
routes.put('/recycled-products/:id', recycledProductController.update);

export default routes;
