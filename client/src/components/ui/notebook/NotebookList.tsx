import { Notebook } from "@/types/db/notebook";
import "./NotebookList.scss";
import Card from "@/components/ui/card/Card";
import Icon from "@/components/ui/icon/Icon";
import { IconType } from "@/types/icon/Icon";
import { Colors } from "@/constants/color";

type NotebookListProps = {
    notebooks: Notebook[];
};

const NotebookList: React.FC<NotebookListProps> = ({ notebooks }) => {
    return (
        <div className="notebooks">
            {notebooks.map((notebook) => (
                <Card key={notebook.id} color={notebook.color}>
                    <h2>{notebook.title}</h2>
                    <div className="notebooks__notebook">
                        <h3>{notebook.notes.length}</h3>
                        <Icon
                            type={IconType.OCTICONS}
                            name="note"
                            size={50}
                            color={Colors.white}
                        />
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default NotebookList;
