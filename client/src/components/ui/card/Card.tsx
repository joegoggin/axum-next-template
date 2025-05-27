import { ReactNode } from "react";
import "./Card.scss";

type CardProps = {
    color: string;
    onClick: () => void;
    children: ReactNode;
};

const Card: React.FC<CardProps> = ({ color, onClick, children }) => {
    return (
        <div
            className="card"
            style={{ background: color }}
            onClick={onClick}
            role="button"
        >
            {children}
        </div>
    );
};

export default Card;
