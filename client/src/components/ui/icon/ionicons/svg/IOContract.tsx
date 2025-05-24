import { SVGProps } from "@/types/SVG";

const IOContract: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M14.25 20V14.75H19.5M14.7281 15.2295L20.25 20.75M9.75 5V10.25H4.5M9.27188 9.77047L3.75 4.25M19.5 10.25H14.25V5M14.7295 9.77188L20.25 4.25M4.5 14.75H9.75V20M9.27047 15.2281L3.75 20.75"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOContract;
