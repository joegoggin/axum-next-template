import { SVGProps } from "@/types/SVG";

const IOReorderThree: React.FC<SVGProps> = ({
    width,
    height,
    color = "black",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M4.78125 12.5H19.2188M4.78125 8.75H19.2188M4.78125 16.25H19.2188"
                stroke={color}
                strokeWidth="2.0625"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOReorderThree;
