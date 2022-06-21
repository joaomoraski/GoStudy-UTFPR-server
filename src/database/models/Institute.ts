import { connection } from '../../connectDB';
import { DataTypes } from 'sequelize';

// npx sequelize-cli model:generate --name Institute --attributes id:integer,name:string,city:string,telephone:string,openingTime:string,closingTime:string
// npx sequelize-cli seed:generate --name demo-user
// npx sequelize-cli migration:create --name create-room-has-schedules-table-migration
const InstituteDB = connection.define('Institute', {
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
    openingTime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    closingTime: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: "institute",
    timestamps: false
})

export { InstituteDB };