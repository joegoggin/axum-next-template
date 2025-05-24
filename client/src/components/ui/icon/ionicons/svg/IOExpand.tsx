import { SVGProps } from "@/types/SVG";

const IOExpand: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M20.25 15.5V20.75H15M19.7719 20.2705L14.25 14.75M3.75 9.5V4.25H9M4.22812 4.72953L9.75 10.25M15 4.25H20.25V9.5M19.7705 4.72812L14.25 10.25M9 20.75H3.75V15.5M4.22953 20.2719L9.75 14.75"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOExpand;
