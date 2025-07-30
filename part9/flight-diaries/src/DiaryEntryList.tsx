import { useEffect, useState } from "react";
import { type NonSensitiveDiaryEntry } from "./types/diaryEntry";
import { DiaryEntryRenderer } from "./DiaryEntryRenderer";
import axios from "axios";
import { serverPath } from "./misc/serverPath";

export function DiaryEntryList() {
    const [entries, setEntries] = useState<NonSensitiveDiaryEntry[]>([]);

    useEffect(() => {
        axios
            .get<NonSensitiveDiaryEntry[]>(serverPath("diaries"))
            .then((res) => setEntries(res.data));
    }, []);

    if (!entries.length) return null;

    return (
        <div>
            <h1>Diary Entries</h1>
            {entries.map((entry) => (
                <DiaryEntryRenderer entry={entry} key={entry.id} />
            ))}
        </div>
    );
}
