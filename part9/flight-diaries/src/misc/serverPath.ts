import { serverUrl } from "../config";

export function serverPath(path: string = ""): string {
    return `${serverUrl}/${path}`;
}
