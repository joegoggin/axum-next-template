import { SVGProps } from "@/types/SVG";

const IOCheckmarkDone: React.FC<SVGProps> = ({
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
            fill="none"
        >
            <path
                d="M21.75 6.5L11.25 18.5L6.75 14M6.75 18.5L2.25 14M17.25 6.5L10.875 13.8125"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOCheckmarkDone;
