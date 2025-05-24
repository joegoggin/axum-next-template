import { SVGProps } from "@/types/SVG";

const IOEllipse: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M12 22.25C6.62391 22.25 2.25 17.8761 2.25 12.5C2.25 7.12391 6.62391 2.75 12 2.75C17.3761 2.75 21.75 7.12391 21.75 12.5C21.75 17.8761 17.3761 22.25 12 22.25Z"
                fill={color}
            />
        </svg>
    );
};

export default IOEllipse;
