import type { Content } from "./types/content";

type ContentEntryProps = {
  content: Content;
};

export function ContentEntry({
  content: { name, exerciseCount },
}: ContentEntryProps) {
  return (
    <p>
      {name} {exerciseCount}
    </p>
  );
}
