import { connection } from '../../src/connectDB';
import { DataTypes } from 'sequelize';

const Institute = connection.define('institute', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    opening_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    closing_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export { Institute };