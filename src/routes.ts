/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { authController } from './modules/Auth/'
import { createInstituteController } from './modules/Institute/useCases/createInstitute/';
import { showInstituteController } from './modules/Institute/useCases/showInstitute/';
import { updateInstituteController } from './modules/Institute/useCases/updateInstitute/';
import { deleteInstituteController } from './modules/Institute/useCases/deleteInstitute/';
import { createReservationController } from './modules/Reservation/useCases/createReservation';
import { showReservationController } from './modules/Reservation/useCases/showReservation';
import { updateReservationController } from './modules/Reservation/useCases/updateReservation';
import { deleteReservationController } from './modules/Reservation/useCases/deleteReservation';
import { createRoomController } from './modules/Room/useCases/createRoom';
import { showRoomController } from './modules/Room/useCases/showRoom';
import { updateRoomController } from './modules/Room/useCases/updateRoom';
import { deleteRoomController } from './modules/Room/useCases/deleteRoom';
import { createRoomHasScheduleController } from './modules/RoomHasSchedule/useCases/createRoomHasSchedule';
import { showRoomHasScheduleController } from './modules/RoomHasSchedule/useCases/showRoomHasSchedule';
import { updateRoomHasScheduleController } from './modules/RoomHasSchedule/useCases/updateRoomHasSchedule';
import { deleteRoomHasScheduleController } from './modules/RoomHasSchedule/useCases/deleteRoomHasSchedule';
import { createScheduleController } from './modules/Schedule/useCases/createSchedule';
import { showScheduleController } from './modules/Schedule/useCases/showSchedule';
import { updateScheduleController } from './modules/Schedule/useCases/updateSchedule';
import { deleteScheduleController } from './modules/Schedule/useCases/deleteSchedule';
import { createUserController } from './modules/User/useCases/createUser';
import { showUserController } from './modules/User/useCases/showUser';
import { updateUserController } from './modules/User/useCases/updateUser';
import { deleteUserController } from './modules/User/useCases/deleteUser';
const router = Router();

router.post('/auth', (req, res) => {
    return authController.authenticate(req, res);
})

// =================== Institute ===================

router.post('/institute', (req, res) => {
    return createInstituteController.handle(req, res);
})

router.get('/institute', (req, res) => {
    return showInstituteController.handle(req, res); 
})

router.put('/institute', (req, res) => {
    return updateInstituteController.handle(req, res); 
})

router.delete('/institute', (req, res) => {
    return deleteInstituteController.handle(req, res);
})

// =================== Reservation ===================

router.post('/reservation', (req, res) => {
    return createReservationController.handle(req, res);
})

router.get('/reservation', (req, res) => {
    return showReservationController.handle(req, res); 
})

router.put('/reservation', (req, res) => {
    return updateReservationController.handle(req, res); 
})

router.delete('/reservation', (req, res) => {
    return deleteReservationController.handle(req, res);
})

// =================== Room ===================

router.post('/room', (req, res) => {
    return createRoomController.handle(req, res);
})

router.get('/room', (req, res) => {
    return showRoomController.handle(req, res); 
})

router.put('/room', (req, res) => {
    return updateRoomController.handle(req, res); 
})

router.delete('/room', (req, res) => {
    return deleteRoomController.handle(req, res);
})

// =================== RoomHasSchedule ===================

router.post('/roomHasSchedule', (req, res) => {
    return createRoomHasScheduleController.handle(req, res);
})

router.get('/roomHasSchedule', (req, res) => {
    return showRoomHasScheduleController.handle(req, res); 
})

router.put('/roomHasSchedule', (req, res) => {
    return updateRoomHasScheduleController.handle(req, res); 
})

router.delete('/roomHasSchedule', (req, res) => {
    return deleteRoomHasScheduleController.handle(req, res);
})

// =================== Schedule ===================

router.post('/schedule', (req, res) => {
    return createScheduleController.handle(req, res);
})

router.get('/schedule', (req, res) => {
    return showScheduleController.handle(req, res); 
})

router.put('/schedule', (req, res) => {
    return updateScheduleController.handle(req, res); 
})

router.delete('/schedule', (req, res) => {
    return deleteScheduleController.handle(req, res);
})

// =================== User ===================

router.post('/user', (req, res) => {
    return createUserController.handle(req, res);
})

router.get('/user', (req, res) => {
    return showUserController.handle(req, res); 
})

router.put('/user', (req, res) => {
    return updateUserController.handle(req, res); 
})

router.delete('/user', (req, res) => {
    return deleteUserController.handle(req, res);
})

export { router }