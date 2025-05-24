import { Note } from "@/types/db/note";

export type Notebook = {
    id: string;
    title: string;
    color: string;
    notes: Note[];
};
