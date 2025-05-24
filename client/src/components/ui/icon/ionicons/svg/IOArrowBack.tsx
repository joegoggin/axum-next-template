import { SVGProps } from "@/types/SVG";

const IOArrowBack: React.FC<SVGProps> = ({
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
                d="M11.4375 19.25L4.6875 12.5L11.4375 5.75M5.625 12.5H19.3125"
                stroke={color}
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOArrowBack;
