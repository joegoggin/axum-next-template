import { SVGProps } from "@/types/SVG";

const FAArrowUp: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M4 15L12 7L20 15L18 17L12 11L6 17L4 15Z"
                fill={color}
            />
        </svg>
    );
};

export default FAArrowUp;
