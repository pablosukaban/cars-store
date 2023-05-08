import ApiError from '../error/ApiError.js';
import Models from '../models/models.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const { User, Basket } = Models;

const generateJwt = (id, email, role) => {
    const newToken = jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: '24h',
    });

    return newToken;
};

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;

        if (!email || !password) {
            return next(ApiError.badRequest('Неверный email или password'));
        }

        const candidate = await User.findOne({ where: { email } });

        if (candidate) {
            return next(
                ApiError.badRequest('Пользователь с таким email уже существует')
            );
        }

        const hashPassword = await bcrypt.hash(password, 5);

        const user = await User.create({ email, password: hashPassword, role });

        const basket = await Basket.create({ userId: user.id });

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }
    async login(req, res) {}
    async check(req, res, next) {
        const { id } = req.query;

        if (!id) {
            return next(ApiError.badRequest('ID не указан'));
        }

        res.json(id);
    }
}

export default new UserController();
