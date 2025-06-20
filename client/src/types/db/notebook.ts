import { Notes } from "@/types/db/note";

export type Notebook = {
    id: string;
    title: string;
    color: string;
    notes: Notes;
};

export type Notebooks = Notebook[];
