"use client";

import { Notebook } from "@/types/db/notebook";
import "./NotebookList.scss";
import Card from "@/components/ui/card/Card";
import Icon from "@/components/ui/icon/Icon";
import { IconType } from "@/types/icon/Icon";
import { useCssVar } from "@/hooks/useCssVar";
import { useRouter } from "next/navigation";
import Grid from "@/components/ui/grid/Grid";

type NotebookListProps = {
    notebooks: Notebook[];
};

const NotebookList: React.FC<NotebookListProps> = ({ notebooks }) => {
    const [textColor] = useCssVar("--text-color");
    const router = useRouter();

    const handleClick = (id: string) => {
        router.push(`/notebook/${id}`);
    };

    return (
        <Grid>
            {notebooks.map((notebook) => (
                <Card
                    key={notebook.id}
                    color={notebook.color}
                    onClick={() => handleClick(notebook.id)}
                >
                    <h2>{notebook.title}</h2>
                    <div className="notebooks__notebook">
                        <h3>{notebook.notes.length}</h3>
                        <Icon
                            type={IconType.OCTICONS}
                            name="note"
                            size={50}
                            color={textColor}
                        />
                    </div>
                </Card>
            ))}
        </Grid>
    );
};

export default NotebookList;
