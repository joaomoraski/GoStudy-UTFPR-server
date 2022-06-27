import { connection } from '../../connectDB';
import { DataTypes } from 'sequelize';
import { InstituteDB } from './Institute';

const RoomDB = connection.define('room', {
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
}, {
    tableName: "room",
    timestamps: false
})

RoomDB.belongsTo(InstituteDB, { foreignKey: 'fk_id_institute' });

export { RoomDB };
