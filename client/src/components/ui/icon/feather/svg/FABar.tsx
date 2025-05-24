import { SVGProps } from "@/types/SVG";

const FABar: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M3 16H21V18H3V16ZM3 11H21V13H3V11ZM3 6H21V8H3V6Z"
                fill={color}
            />
        </svg>
    );
};

export default FABar;
