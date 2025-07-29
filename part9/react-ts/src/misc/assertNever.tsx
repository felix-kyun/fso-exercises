export function assertNever(value: never): never {
    throw new Error(
        `Unhandled discriminated Union member: ${JSON.stringify(value)}`,
    );
}
