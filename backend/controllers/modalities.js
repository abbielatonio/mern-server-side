import Practitioner from "../models/Practitioner.js";
import Modality from "../models/Modality.js";

//........................................................................add new modality and update prac
export const createModality = async (req, res) => {
  const practitionerId = req.params.id;
  const newModality = new Modality(req.body);
      const savedModality = await newModality.save();

       {
          //find practitioner and add modality
          await Practitioner.findByIdAndUpdate(practitionerId, {
              $push: {modality: savedModality.modality}
          });
      
          
      }

      res.status(200).json(savedModality);

}



//........................................................................get modality by id

export const getModality = async (req, res) => {

      const modality = await Modality.findById(req.params.id);
      res.status(200).json(modality);


  };


//........................................................................get all modalities

export const getAllModalities = async (req, res) => {

    const modalities = await Modality.find();
    res.status(200).json(modalities);




};