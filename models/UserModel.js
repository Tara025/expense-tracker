import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{type: String,
    trim: true,
    required: true},

    password:{type: String, //Richtig???
    trim: true,
    required: true},
  
    text: {
      type: String,
      trim: true,
      required: [true, 'Bitte füge einen Text ein.']
    },
    amount: {
      type: Number,
      required: [true, 'Bitte einen negativen oder positiven Betrag eingeben.']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    orders:{type:mongoose.Schema.Types.ObjectId, ref:`Transaction`}
  });

 

 export const UserModel = mongoose.model('User', UserSchema);