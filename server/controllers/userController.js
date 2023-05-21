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

        // const basket = await Basket.create({ userId: user.id });

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }

        const comparePassword = bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }

        const token = generateJwt(user.id, user.email, user.role);

        return res.json({ token });
    }

    async check(req, res, next) {
        const { user } = req;

        const token = generateJwt(user.id, user.email, user.role);

        return res.json({ token });
    }

    async getAllUsers(req, res, next) {
        const users = await User.findAll();

        return res.json(users);
    }
}

export default new UserController();
