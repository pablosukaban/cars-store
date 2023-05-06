import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketCar = sequelize.define('basket_car', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Car = sequelize.define('car', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    year_of_manufacture: { type: DataTypes.INTEGER, allowNull: false },
    body_type: { type: DataTypes.STRING, allowNull: false },
    car_color: { type: DataTypes.STRING, allowNull: false },
    car_price: { type: DataTypes.INTEGER, allowNull: false },
    car_image: { type: DataTypes.STRING, allowNull: false },
});

const CarModel = sequelize.define('car_models', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    car_model_name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const CarMake = sequelize.define('car_makes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    make_of_the_car_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

const CarInfo = sequelize.define('car_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
});

const ModelMake = sequelize.define('model_make', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketCar);
BasketCar.belongsTo(Basket);

CarModel.hasMany(Car);
Car.belongsTo(CarModel);

CarMake.hasMany(Car);
Car.belongsTo(CarMake);

Car.hasMany(BasketCar);
BasketCar.belongsTo(Car);

Car.hasMany(CarInfo);
CarInfo.belongsTo(Car);

CarMake.belongsToMany(CarModel, { through: ModelMake });
CarModel.belongsToMany(CarMake, { through: ModelMake });

export default {
    User,
    Basket,
    BasketCar,
    Car,
    CarModel,
    CarMake,
    CarInfo,
    ModelMake,
};
