import mongoose from "mongoose";

export function validateMongooseId(id) {
	return mongoose.Types.ObjectId.isValid(id);
}
