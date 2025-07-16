import z from "zod";
import ServerError from "./serverError.error";

export default class ValidationError extends ServerError {
    constructor(zodError: z.ZodError) {
        super("Validation Error", 400);
        this.name = "ValidationError";
        Object.setPrototypeOf(this, new.target.prototype);
        this.info = z.treeifyError(zodError);
    }
}
