import { SVGProps } from "@/types/SVG";

const IOMove: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M8.25 5.75L12 2L15.75 5.75M11.9991 2L12 23M12 23L8.25 19.25M12 23L15.75 19.25M18.75 8.75L22.5 12.5M22.5 12.5L18.75 16.25M22.5 12.5H1.5M5.25 8.75L1.5 12.5M1.5 12.5L5.25 16.25"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOMove;
