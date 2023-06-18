import Models from "../models/models.js";

const { Credits } = Models;

class CreditController {
  async create(req, res) {
    try {
      const { user_email, user_name, user_phone, message } = req.body;

      const newCredit = await Credits.create({
        user_email,
        user_name,
        user_phone,
        message,
        date: Date.now()
      });

      return res.json(newCredit);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    const credits = await Credits.findAll();
    return res.json(credits);
  }
}

export default new CreditController();