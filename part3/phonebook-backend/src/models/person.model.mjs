import mongoose from "mongoose";
import { validatePersonName } from "../misc/personModelValidator.mjs";

const personSchema = new mongoose.Schema({
  name: String,
  number: {
    type: String,
    validate: {
      validator: validatePersonName,
      message: ({value}) => `${value} is not a valid phone number!`,
    }
  },
});

personSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
})

export const Person = mongoose.model("Person", personSchema);
