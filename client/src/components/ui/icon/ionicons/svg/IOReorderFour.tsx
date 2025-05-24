import { SVGProps } from "@/types/SVG";

const IOReorderFour: React.FC<SVGProps> = ({
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
                d="M4.78125 14.75H19.2188M4.78125 10.25H19.2188M4.78125 5.75H19.2188M4.78125 19.25H19.2188"
                stroke={color}
                strokeWidth="2.0625"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOReorderFour;
