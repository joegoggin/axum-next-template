import { SVGProps } from "@/types/SVG";

const FAArrowLeft: React.FC<SVGProps> = ({
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
                d="M15 4L17 6L11 12L17 18L15 20L7 12L15 4Z"
                fill={color}
            />
        </svg>
    );
};

export default FAArrowLeft;
