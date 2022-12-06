import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const modalitySchema = new mongoose.Schema({
modality: {
  type: String,
  lowercase: true,
  required: true
},
price: {
  type: Number,
  required: true,
},
desc: {
  type: String,
  required: true
}, 
// practitionerId:  //.....................did i use this???
// {
//   type: Schema.Types.ObjectId,
//   ref: "Practitioner"
// },
}, 
{
  timestamps: true
});
export default model('Modality', modalitySchema);
