import { getRepository, Repository } from 'typeorm';
import RecycledProduct from '../../entity/RecycledProduct';

class TaskRepository {
    private recycled:Repository<RecycledProduct>;

    constructor() {
        this.recycled = getRepository(RecycledProduct);
    }

    async find(userId:number): Promise<any> {
        const recycleds = await this.recycled.find({ where: { userId }});
        return recycleds;
    }

    async findAll(): Promise<any> {
        const recycleds = await this.recycled.find({ where: { finished: false }});
        return recycleds;
    }

    async findById(id:number): Promise<any> {
        const recycled = await this.recycled.findOne(id);
        return recycled;
    }

    async create(body:any): Promise<any> {
        const recycled = await this.recycled.save(body);
        return recycled;
    }

    async update(id:number, value:number): Promise<any> {
        await this.recycled.update(id, { finished: true, value });
        const recycled = await this.recycled.findOne(id);
        return recycled;
    }
}

export default TaskRepository;