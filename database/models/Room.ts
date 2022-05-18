import { connection } from '../../src/connectDB';
import { DataTypes } from 'sequelize';

const Room = connection.define('room', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fk_id_institute: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export { Room };
