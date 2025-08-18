export type Note = {
    id: string;
    title: string;
    content: string;
    color: string;
    notebook_id: string;
    created_at: string;
    modified_at: string;
};

export type Notes = Note[];
