import { SVGProps } from "@/types/SVG";

const FAExpand: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M14 4H20V10L18 8L14 12L12 10L16 6L14 4ZM10 20H4V14L6 16L10 12L12 14L8 18L10 20Z"
                fill={color}
            />
        </svg>
    );
};

export default FAExpand;
