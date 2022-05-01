import { connection } from '../../src/connectDB';
import { DataTypes } from 'sequelize';

const Reservation = connection.define('reservation', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fk_id_room: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fk_id_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fk_id_schedule: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export { Reservation };