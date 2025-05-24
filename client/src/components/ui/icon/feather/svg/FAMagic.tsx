import { SVGProps } from "@/types/SVG";

const FAMagic: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M3 5L5 3L21 19L19 21L3 5ZM13 5L14 3L15 5L17 6L15 7L14 9L13 7L11 6L13 5ZM5 15L6 13L7 15L9 16L7 17L6 19L5 17L3 16L5 15ZM4 9L5 10L4 11L3 10L4 9ZM18 10L19 11L18 12L17 11L18 10Z"
                fill={color}
            />
        </svg>
    );
};

export default FAMagic;
