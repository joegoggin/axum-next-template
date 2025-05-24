import { SVGProps } from "@/types/SVG";

const LUStretchHorizontal: React.FC<SVGProps> = ({
    width,
    height,
    color = "black",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 22 18"
            fill="none"
        >
            <path
                d="M19 1H3C1.89543 1 1 1.89543 1 3V5C1 6.10457 1.89543 7 3 7H19C20.1046 7 21 6.10457 21 5V3C21 1.89543 20.1046 1 19 1Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19 11H3C1.89543 11 1 11.8954 1 13V15C1 16.1046 1.89543 17 3 17H19C20.1046 17 21 16.1046 21 15V13C21 11.8954 20.1046 11 19 11Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default LUStretchHorizontal;
