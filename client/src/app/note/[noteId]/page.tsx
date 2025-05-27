type NotePageProps = {
    params: Promise<{
        noteId: string;
    }>;
};

const NotePage: React.FC<NotePageProps> = async ({ params }) => {
    const { noteId } = await params;

    return <h1>{noteId}</h1>;
};

export default NotePage;
