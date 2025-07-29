import { Part } from "./Part";
import type { CoursePart } from "./types/content";

type ContentProps = {
    contents: Array<CoursePart>;
};

export function Content({ contents }: ContentProps) {
    return (
        <>
            {contents.map((content) => (
                <Part part={content} />
            ))}
        </>
    );
}
