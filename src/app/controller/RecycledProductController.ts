import { Request, Response } from 'express';
import RecycledProductRepository from '../repository/recycledProduct/RecycledProductRepository';

class RecycledProductController {
    async index(request: Request, response: Response) {
        const recycledRepository = new RecycledProductRepository();
        const userId: number = request.user.id;
        const recycleds = await recycledRepository.find(userId);
        return response.json(recycleds);
    }

    async show(request: Request, response: Response) {
        const recycledRepository = new RecycledProductRepository();
        const id:number = parseInt(request.params.id);
        const recycled = await recycledRepository.findById(id);
        return response.json(recycled);
      }
    
      async store(request: Request, response: Response) {
        const recycledRepository = new RecycledProductRepository();
        //request.body.userId = request.user.id;
        const recycled = await recycledRepository.create(request.body);
        return response.status(201).json(recycled)
      }
    
      async update(request: Request, response: Response) {
        const recycledRepository = new RecycledProductRepository();
        const id:number = parseInt(request.params.id);
        const { value } = request.body
        let recycled = await recycledRepository.findById(id);
        if(!recycled)
          return response.status(404).json({ message: 'Dados não encontrados.' });
        recycled = await recycledRepository.update(id, value);
        return response.json(recycled);
      }
}

export default RecycledProductController;