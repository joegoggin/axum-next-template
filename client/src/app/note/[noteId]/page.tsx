import { Note } from "@/types/db/note";
import { get } from "@/utils/axios";

type NotePageProps = {
    params: Promise<{
        noteId: string;
    }>;
};

const NotePage: React.FC<NotePageProps> = async ({ params }) => {
    const { noteId } = await params;
    const { data } = await get<Note>({ route: `/note/${noteId}` });

    return (
        <div>
            <h1>{data?.title}</h1>
            <p>{data?.content}</p>
        </div>
    );
};

export default NotePage;
