import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const practitionerSchema = new mongoose.Schema({
firstName: {
  type: String,
  required: true
},
lastName: {
  type: String,
  required: true
},
practiceName: {
  type: String,
  required: true
},
email: {
  type: String,
  lowercase: true,
  required: true
},
city: {
  type: String,
  required: true,
  
},
image: {
  type: String,
  required: true
},
category: {
  type: String,
  required: true
},
deleted: { type: Boolean, default: false }
,

// modality: [{modality:String}]
modality: {
  type: [String],
  

},
// posts: [{ type: schema.Types.ObjectId, ref: 'Post'  }],

});

export default model('Practitioner', practitionerSchema);
