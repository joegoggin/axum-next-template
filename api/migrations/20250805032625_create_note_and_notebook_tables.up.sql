CREATE TABLE Notebook (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    color TEXT NOT NULL
);

CREATE TABLE Note (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    color TEXT NOT NULL,
    notebook_id UUID NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_notebook
        FOREIGN KEY (notebook_id)
        REFERENCES notebook (id) 
        ON DELETE CASCADE
);

CREATE INDEX idx_note_notebook_id ON Note (notebook_id);
