/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createInstituteController } from './modules/Institute/useCases/createInstitute/';
import { showInstituteController } from './modules/Institute/useCases/showInstitute/';
import { updateInstituteController } from './modules/Institute/useCases/updateInstitute/';
import { deleteInstituteController } from './modules/Institute/useCases/deleteInstitute/';
const router = Router();

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

export { router }