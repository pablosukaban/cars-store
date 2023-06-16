import Models from "../models/models.js";

const { Orders } = Models;

class ModelsController {
  async create(req, res) {
    try {
      const order = await Orders.create(req.body);
      // console.log(req.user);
      return res.status(201).json(order);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const orders = await Orders.findAll();
      return res.status(200).json(orders);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async remove(req, res) {
    try {
      const order = await Orders.destroy({
        where: {
          id: req.params.id
        }
      });
      return res.status(200).json(order);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

export default new ModelsController();
