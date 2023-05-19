import Models from '../models/models.js';

const { Orders } = Models;

class ModelsController {
    async create(req, res) {
        try {
            const order = await Orders.create(req.body);
            return res.status(201).json(order);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
}

export default new ModelsController();
