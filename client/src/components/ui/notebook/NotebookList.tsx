import { Notebook } from "@/types/db/notebook";
import "./NotebookList.scss";
import Card from "@/components/ui/card/Card";

type NotebookListProps = {
    notebooks: Notebook[];
};

const NotebookList: React.FC<NotebookListProps> = ({ notebooks }) => {
    return (
        <div className="notebooks">
            {notebooks.map((notebook) => (
                <Card key={notebook.id} color={notebook.color}>
                    <h2>{notebook.title}</h2>
                    <h3>{`number of notes: ${notebook.notes.length}`}</h3>
                </Card>
            ))}
        </div>
    );
};

export default NotebookList;
