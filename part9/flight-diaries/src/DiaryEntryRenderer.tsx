import type { NonSensitiveDiaryEntry } from "./types/diaryEntry";

interface DiaryEntryRendererProps {
    entry: NonSensitiveDiaryEntry;
}

export function DiaryEntryRenderer({
    entry: { date, weather, visibility },
}: DiaryEntryRendererProps) {
    return (
        <div>
            <h3>{date}</h3>
            <p>
                visibility: {visibility}
                <br />
                weather: {weather}
            </p>
        </div>
    );
}
