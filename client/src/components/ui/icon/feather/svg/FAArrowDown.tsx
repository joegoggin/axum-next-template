import { SVGProps } from "@/types/SVG";

const FAArrowDown: React.FC<SVGProps> = ({
    width,
    height,
    color = "black",
}) => {
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
                d="M6 7L12 13L18 7L20 9L12 17L4 9L6 7Z"
                fill={color}
            />
        </svg>
    );
};

export default FAArrowDown;
