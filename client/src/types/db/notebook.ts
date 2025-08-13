import { Notes } from "@/types/db/note";

export type Notebook = {
    id: string;
    title: string;
    color: string;
    notes: Notes;
    created_at: string;
    modified_at: string;
};

export type Notebooks = Notebook[];
