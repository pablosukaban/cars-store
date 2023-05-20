import Models from '../models/models.js';

const { Orders } = Models;

class ModelsController {
    async create(req, res) {
        try {
            const order = await Orders.create(req.body);
            console.log(req.user);
            return res.status(201).json(order);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        
    }
}

export default new ModelsController();
