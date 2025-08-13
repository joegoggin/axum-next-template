CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE Notebook (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    color TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE Note (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    color TEXT NOT NULL,
    notebook_id UUID NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_notebook
        FOREIGN KEY (notebook_id)
        REFERENCES notebook (id) 
        ON DELETE CASCADE
);

CREATE INDEX idx_note_notebook_id ON Note (notebook_id);

CREATE OR REPLACE FUNCTION update_modified_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.modified_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_notebook_update_modified_at
BEFORE UPDATE ON Notebook
FOR EACH ROW
EXECUTE FUNCTION update_modified_at_column();

CREATE TRIGGER trg_note_update_modified_at
BEFORE UPDATE ON Note
FOR EACH ROW
EXECUTE FUNCTION update_modified_at_column();

CREATE OR REPLACE FUNCTION update_notebook_modified_at_from_note()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
        UPDATE Notebook
        SET modified_at = NOW()
        WHERE id = NEW.notebook_id;
    IF TG_OP = 'UPDATE' AND OLD.notebook_id IS DISTINCT FROM NEW.notebook_id THEN
        UPDATE Notebook
        SET modified_at = NOW()
        WHERE id = OLD.notebook_id;
    END IF;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE Notebook
        SET modified_at = NOW()
        WHERE id = OLD.notebook_id;
    END IF;
    RETURN NULL; 
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_note_affect_notebook_modified_at
AFTER INSERT OR UPDATE OR DELETE ON Note
FOR EACH ROW
EXECUTE FUNCTION update_notebook_modified_at_from_note();
