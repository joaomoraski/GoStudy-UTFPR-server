import { connection } from '../../connectDB';
import { DataTypes } from 'sequelize';

// npx sequelize-cli model:generate --name Institute --attributes id:integer,name:string,city:string,telephone:string,opening_time:string,closing_time:string
// npx sequelize-cli seed:generate --name demo-user
// npx sequelize-cli migration:create --name create-room-has-schedules-table-migration
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