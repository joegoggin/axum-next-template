import NoteList from "@/components/ui/note/NoteList";
import { Notebook } from "@/types/db/notebook";
import { get } from "@/utils/axios";

type NotebookPageProps = {
    params: Promise<{
        notebookId: string;
    }>;
};

const NotebookPage: React.FC<NotebookPageProps> = async ({ params }) => {
    const { notebookId } = await params;

    const { data } = await get<Notebook>({ route: `/notebook/${notebookId}` });

    return (
        <div>
            <h1>{data?.title}</h1>
            {data && <NoteList notes={data.notes} />}
        </div>
    );
};

export default NotebookPage;
