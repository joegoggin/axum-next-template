import { SVGProps } from "@/types/SVG";

const FACheck: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M6 10L4 12L10 18L20 8L18 6L10 14L6 10Z"
                fill={color}
            />
        </svg>
    );
};

export default FACheck;
