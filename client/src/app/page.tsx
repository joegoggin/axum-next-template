import NotebookList from "@/components/ui/notebook/NotebookList";
import { get } from "@/utils/axios";
import { Notebooks } from "@/types/db/notebook";

const { data } = await get<Notebooks>({ route: "/notebook" });

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Notebooks</h1>
            {data && <NotebookList notebooks={data} />}
        </div>
    );
};

export default HomePage;
