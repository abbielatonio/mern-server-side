import Modality from "../models/Modality.js";
import Practitioner from "../models/Practitioner.js";
import mongoose from "mongoose";

//.....................................................................................create new practitioner
export const createPractitioner = async (req, res) => {
  const newPractitioner = new Practitioner(req.body);
 
    const savedPractitioner = await newPractitioner.save();
    res.status(200).json(savedPractitioner);

  };
  


//.....................................................................................get  practitioner by id


export const getPractitioner = async (req, res) => {
  const practitioner = await Practitioner.findById(req.params.id);
    res.status(200).json(practitioner);
  };


//.....................................................................................get all practitioners

export const getAllPractitioners = async (req, res) => {

  const {...all} = req.query;

  const practitioners = await Practitioner.find({...all});
  res.status(200).json(practitioners);
};


//.....................................................................................get practitioner count by city

export const byCity = async (req, res) => {
  const cities = req.query.city.split(",")

      const list = await Promise.all(cities.map(city => {
        //          return Practitioner.find({city:city});
          return Practitioner.countDocuments({city:{$regex : city.toString(), "$options": "i" }}); //i: Case insensitivity to match upper and lower cases. For an example, see Perform Case-Insensitive Regular Expression Match.
      }));
      res.status(200).json(list);

    };
  

//.....................................................................................get practitioner count by category

export const byCategory = async (req, res) => {
 

    //   const allMind = await Practitioner.find({category: "Mind"});
      const allMind = await Practitioner.countDocuments({category: {$regex : "Mind", "$options": "i" }});
      const allBody = await Practitioner.countDocuments({category: {$regex : "Body", "$options": "i" }});
      const allSpirit = await Practitioner.countDocuments({category: {$regex : "Spirit", "$options": "i" }});
 
      
      res.status(200).json([
        //'practitioner' to count to give number, practitioner if you want to give list of practitioners
          {category: "Mind", count: allMind},
          {category: "Body", count: allBody},
          {category: "Spirit", count: allSpirit}
      ]);

    };
  


//.....................................................................................get practitioner count by modality

export const byModality = async (req, res) => {
  const modalities = req.query.modality.split(",");


      const list = await Promise.all(modalities.map(modality => {
        //          return Practitioner.countDocuments({modality:modality});
          return Practitioner.countDocuments({modality:{$regex : modality.toString(), "$options": "i" }});
      }));
      res.status(200).json(list);

    };
  


//.....................................................................................soft delete practitioner
  export const deletePractitioner = async (req, res) => {

  //await Post.deleteOne({ // ...dont use thhis!
  await Practitioner.findByIdAndUpdate(req.params.id, { deleted: true }); 
  res.status(200).json('practitioner Deleted');

};
  

//.....................................................................................update specific details for practitioner

export const updatePractitioner = async (req, res) => {
  await Practitioner.findByIdAndUpdate(req.params.id, { email: req.body.email, city: req.body.city, practiceName: req.body.practiceName }); 
  res.status(200).json('practitioner updated');

};
  