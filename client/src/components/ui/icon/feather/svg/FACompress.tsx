import { SVGProps } from "@/types/SVG";

const FACompress: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M18 12H12V6L14 8L17 5L19 7L16 10L18 12ZM6 12H12V18L10 16L7 19L5 17L8 14L6 12Z"
                fill={color}
            />
        </svg>
    );
};

export default FACompress;
