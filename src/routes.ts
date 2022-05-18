/* eslint-disable @typescript-eslint/no-floating-promises */
import { Router } from 'express'
import { connection } from './connectDB'


const router = Router();


router.get('/institutes', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from users");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            console.log(error);
        }
    })();
})

router.get('/users', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from users");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            console.log(error);
        }
    })();
})

router.get('/rooms', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from users");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            console.log(error);
        }
    })();
})

router.get('/schedules', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from users");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            console.log(error);
        }
    })();
})

router.get('/rooms_has_schedules', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from users");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            console.log(error);
        }
    })();
})

router.get('/reservations', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from users");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            console.log(error);
        }
    })();
})

export { router }