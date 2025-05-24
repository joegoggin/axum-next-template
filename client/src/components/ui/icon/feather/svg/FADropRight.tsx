import { SVGProps } from "@/types/SVG";

const FADropRight: React.FC<SVGProps> = ({
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
                d="M8 5V19L16 12L8 5Z"
                fill={color}
            />
        </svg>
    );
};

export default FADropRight;
