"use client";

import Card from "@/components/ui/card/Card";
import { Notes } from "@/types/db/note";
import { useRouter } from "next/navigation";
import Grid from "@/components/ui/grid/Grid";

type NoteListProps = {
    notes: Notes;
};

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    const router = useRouter();

    const handleClick = (id: string) => {
        router.push(`/note/${id}`);
    };

    return (
        <Grid>
            {notes.map((note) => (
                <Card
                    key={note.id}
                    color={note.color}
                    onClick={() => handleClick(note.id)}
                >
                    <h3>{note.title}</h3>
                </Card>
            ))}
        </Grid>
    );
};

export default NoteList;
