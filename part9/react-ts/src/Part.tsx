import { assertNever } from "./misc/assertNever";
import type { CoursePart } from "./types/content";

type PartProps = {
    part: CoursePart;
};

export function Part({ part }: PartProps) {
    const { name, exerciseCount } = part;
    switch (part.kind) {
        case "basic":
            return (
                <div>
                    <h2>
                        {name} ({exerciseCount})
                    </h2>
                    <p>{part.description}</p>
                </div>
            );
        case "group":
            return (
                <div>
                    <h2>
                        {name} ({exerciseCount})
                    </h2>
                    <p> Group Project Count: {part.groupProjectCount}</p>
                </div>
            );
        case "background":
            return (
                <div>
                    <h2>
                        {name} ({exerciseCount})
                    </h2>
                    <p>{part.description}</p>
                    <p>{part.backgroundMaterial}</p>
                </div>
            );
        case "special":
            return (
                <div>
                    <h2>
                        {name} ({exerciseCount})
                    </h2>
                    <p>{part.description}</p>
                    <p>Requirements: {part.requirements.join(", ")}</p>
                </div>
            );
        default:
            assertNever(part);
    }
}
