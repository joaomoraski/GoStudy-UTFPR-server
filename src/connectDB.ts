import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config({
    path: ".env"
})

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
        port: process.env.DB_PORT,
    }});
 
export { connection };
