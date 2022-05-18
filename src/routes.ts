/* eslint-disable @typescript-eslint/no-floating-promises */
import { Router } from 'express'
import { connection } from './connectDB'


const router = Router();


router.get('/institutes', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from institutes");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            return res.status(500).send("Deu ruim no back irmão");

        }
    })();
})

router.get('/users', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from users");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            return res.status(500).send("Deu ruim no back irmão");

        }
    })();
})

router.get('/rooms', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from rooms");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            return res.status(500).send("Deu ruim no back irmão");

        }
    })();
})

router.get('/schedules', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from schedules");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            return res.status(500).send("Deu ruim no back irmão");

        }
    })();
})

router.get('/rooms_has_schedules', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from rooms_has_schedules");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            return res.status(500).send("Deu ruim no back irmão");

        }
    })();
})

router.get('/reservations', (req, res) => {
    (async function connectionDb(){
        try {
            const resultado = await connection.query("select * from reservations");
            return res.status(201).send(resultado[0]);
        } catch (error) {
            return res.status(500).send("Deu ruim no back irmão");
        }
    })();
})

export { router }