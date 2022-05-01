import { Sequelize } from "sequelize";
import Database from './entities/database'

const connectDB = async ({dbHost, dbName, dbUser, dbPassword, dbPort}: Database)=> {
    // Connection with DB
    const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
        host: dbHost,
        dialect: 'mysql',
        dialectOptions: {
            port: dbPort,
    }});
    await sequelize.authenticate()
        .then(()=>console.log('Connection has been established successfully.'))
        .catch ((error)=>console.error('Unable to connect to the database:', error))
 
}
 
export {connectDB}

