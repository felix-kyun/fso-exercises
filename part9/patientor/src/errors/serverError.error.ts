export default class ServerError extends Error {
    public statusCode: number;
    public info?: Record<string, unknown>;

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = "ServerError";
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
