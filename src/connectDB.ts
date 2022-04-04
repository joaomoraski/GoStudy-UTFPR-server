import { Sequelize } from "sequelize";

import Database from './Entities/database'

const connectDB = async ({host, name, username, password}: Database)=> {
    // Connection with DB
    const sequelize = new Sequelize(name, username, password, {
        host: host,
        dialect: 'mysql',
    });
    await sequelize.authenticate()
        .then(()=>console.log('Connection has been established successfully.'))
        .catch ((error)=>console.error('Unable to connect to the database:', error))
 
}
 
export {connectDB}

