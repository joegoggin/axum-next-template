import { SVGProps } from "@/types/SVG";

const FABolt: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 2H10L6 13H10L8 22L17 9H12.005L18 2Z"
                fill={color}
            />
        </svg>
    );
};

export default FABolt;
