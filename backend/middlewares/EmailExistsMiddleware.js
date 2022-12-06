import Practitioner from "../models/Practitioner.js";

export default async function EmailExistsMiddleware(request, response, next) {


  const { email } = request.body; 
  const emailExists = await Practitioner.findOne({email:email})
  
if (emailExists) {

  return response.status(422).json({
    error: "email in db"
  })
}
  next();
  }
  