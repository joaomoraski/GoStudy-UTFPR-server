import { connection } from '../../connectDB';
import { DataTypes } from 'sequelize';

// npx sequelize-cli-typescript model:generate --name Reservation --attributes fk_id_room:integer,fk_id_user:integer,fk_id_schedule:integer,date:string

const ReservationDB = connection.define('reservation', {
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
    reservationDate: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: "reservation",
    timestamps: false
})

export { ReservationDB };