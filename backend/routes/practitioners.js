import express, { application } from 'express'
import { byCategory, byCity, byModality, createPractitioner, deletePractitioner, getAllPractitioners, getPractitioner, updatePractitioner } from '../controllers/practitioners.js';
import CheckCompleteMiddleware from '../middlewares/CheckCompleteMiddleware.js';
import CheckIdExistsMiddleware from '../middlewares/CheckIdExistsMiddleware.js';
import EmailExistsMiddleware from '../middlewares/EmailExistsMiddleware.js';
import ValidateEmailMiddleware from '../middlewares/ValidateEmailMiddleware.js';

const router = express.Router();


//for adding new practitioner
router.post('/', [ValidateEmailMiddleware, CheckCompleteMiddleware, EmailExistsMiddleware],createPractitioner);

//for getting practitioner by id
router.get('/find/:id', CheckIdExistsMiddleware,getPractitioner);


  //for getting all practitioner
router.get('/', getAllPractitioners);
router.get('/locate/bycity',byCity); //casterror if same route,  corrected by making path of both routes different.
router.get('/search/bycategory', byCategory);
router.get('/search/bymodality', byModality); 

//for deleting practitioner
router.delete('/:id', CheckIdExistsMiddleware, deletePractitioner); 

//for updating practitioner
router.put('/:id', [CheckIdExistsMiddleware, ValidateEmailMiddleware], updatePractitioner); 






export default router;