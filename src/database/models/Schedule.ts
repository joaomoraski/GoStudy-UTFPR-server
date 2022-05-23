import { connection } from '../../connectDB';
import { DataTypes } from 'sequelize';

const Schedule = connection.define('schedule', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    label: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    initial_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    final_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export { Schedule };