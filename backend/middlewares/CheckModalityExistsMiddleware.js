import Practitioner from "../models/Practitioner.js";
import mongoose from "mongoose";


export default async function CheckModaliyExistsMiddleware(request, response, next) {


  const { id: id } = request.params; //..juskolord
  

  // //add this line as a check to validate if object id exists in the database or not

  if (!mongoose.Types.ObjectId.isValid(id)) 
  return response.status(404).json({ error: 'modality doesnt exist' });


  next();
  }
  