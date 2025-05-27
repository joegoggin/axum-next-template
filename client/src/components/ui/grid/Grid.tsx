import { ReactNode } from "react";
import "./Grid.scss";

type GridProps = {
    children: ReactNode;
};

const Grid: React.FC<GridProps> = ({ children }) => {
    return <div className="grid">{children}</div>;
};

export default Grid;
