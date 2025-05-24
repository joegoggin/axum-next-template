import Nav from "@/components/ui/nav/nav";
import "./home.scss";
import Notebooks from "@/components/ui/notebook/notebooks";
import { Notebook } from "@/types/db/notebook";
import { Colors } from "@/constants/color";

const notebooks: Notebook[] = [
    {
        id: "1",
        title: "Notebook 1",
        color: Colors.darkPastelPurple,
        notes: [
            {
                id: "1",
                title: "Note 1",
                content: "This is note 1 ...",
                notebook_id: "1",
            },
            {
                id: "2",
                title: "Note 2",
                content: "This is note 2 ...",
                notebook_id: "1",
            },
            {
                id: "3",
                title: "Note 3",
                content: "This is note 3 ...",
                notebook_id: "1",
            },
        ],
    },
    {
        id: "2",
        title: "Notebook 2",
        color: Colors.apple,
        notes: [
            {
                id: "1",
                title: "Note 1",
                content: "This is note 1 ...",
                notebook_id: "2",
            },
            {
                id: "2",
                title: "Note 2",
                content: "This is note 2 ...",
                notebook_id: "2",
            },
        ],
    },
    {
        id: "3",
        title: "Notebook 3",
        color: Colors.paleCerulean,
        notes: [
            {
                id: "1",
                title: "Note 1",
                content: "This is note 1 ...",
                notebook_id: "3",
            },
        ],
    },
    {
        id: "4",
        title: "Notebook 4",
        color: Colors.tangerine,
        notes: [
            {
                id: "1",
                title: "Note 1",
                content: "This is note 1 ...",
                notebook_id: "4",
            },
        ],
    },
];

const HomePage: React.FC = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home__content">
                <h1>Notebooks</h1>
                <Notebooks notebooks={notebooks} />
            </div>
        </div>
    );
};

export default HomePage;
