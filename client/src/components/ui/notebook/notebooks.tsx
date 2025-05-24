import { Notebook } from "@/types/db/notebook";
import "./notebooks.scss";

type NotebooksProps = {
    notebooks: Notebook[];
};

const Notebooks: React.FC<NotebooksProps> = ({ notebooks }) => {
    return (
        <div className="notebooks">
            {notebooks.map((notebook) => (
                <div
                    className="notebooks__note"
                    key={notebook.id}
                    style={{ background: notebook.color }}
                >
                    <h2>{notebook.title}</h2>
                    <h3>{`number of notes: ${notebook.notes.length}`}</h3>
                </div>
            ))}
        </div>
    );
};

export default Notebooks;
