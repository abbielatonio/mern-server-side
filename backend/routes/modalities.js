import express, { application } from 'express'
import { createModality, getAllModalities, getModality } from '../controllers/modalities.js';
import CheckIdExistsMiddleware from '../middlewares/CheckIdExistsMiddleware.js';
import CheckModaliyExistsMiddleware from '../middlewares/CheckModalityExistsMiddleware.js';

const router = express.Router();

router.post('/:id', CheckIdExistsMiddleware,createModality); //new mmodality per pracID

//For get modality by id
router.get('/:id', CheckModaliyExistsMiddleware, getModality);

//For get all modality
router.get('/', getAllModalities);

export default router;