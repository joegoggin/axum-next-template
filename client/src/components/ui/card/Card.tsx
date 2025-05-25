import { ReactNode } from "react";
import "./Card.scss";

type CardProps = {
    color: string;
    children: ReactNode;
};

const Card: React.FC<CardProps> = ({ color, children }) => {
    return (
        <div className="card" style={{ background: color }}>
            {children}
        </div>
    );
};

export default Card;
