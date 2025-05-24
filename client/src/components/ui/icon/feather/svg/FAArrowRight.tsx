import { SVGProps } from "@/types/SVG";

const FAArrowRight: React.FC<SVGProps> = ({
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
                d="M9.005 4L17.005 12L9.005 20L7 18L13.005 12L7 6L9.005 4Z"
                fill={color}
            />
        </svg>
    );
};

export default FAArrowRight;
