import NotebookList from "@/components/ui/notebook/NotebookList";
import { get } from "@/utils/axios";
import "./home.scss";
import { Notebooks } from "@/types/db/notebook";
import Nav from "@/components/ui/nav/Nav";

const { data } = await get<Notebooks>({ route: "/notebook" });

const HomePage: React.FC = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home__content">
                <h1>Notebooks</h1>
                {data && <NotebookList notebooks={data} />}
            </div>
        </div>
    );
};

export default HomePage;
