import Models from '../models/models.js';

const { Basket } = Models;

class BasketController {
    async create(req, res) {
        const { car_id, total_price } = req.body;
        const { id } = req.user;
        const basket = await Basket.create({
            car_id,
            user_id: id,
            total_price,
            date: new Date().toLocaleString('ru-RU', {
                timeZone: 'Europe/Moscow',
            }),
        });
        return res.json(basket);
    }

    async getAll(req, res) {
        const { id } = req.user;
        const baskets = await Basket.findAll({ where: { user_id: id } });
        return res.json(baskets);
    }

    async delete(req, res) {
        const { id } = req.params;
        const basket = await Basket.destroy({ where: { id } });
        return res.json(basket);
    }
}

export default new BasketController();
