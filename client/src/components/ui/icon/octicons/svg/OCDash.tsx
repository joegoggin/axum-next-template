import { SVGProps } from "@/types/SVG";

const OCDash: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M4.5 13.25C4.5 13.0511 4.57902 12.8603 4.71967 12.7197C4.86032 12.579 5.05109 12.5 5.25 12.5H18.75C18.9489 12.5 19.1397 12.579 19.2803 12.7197C19.421 12.8603 19.5 13.0511 19.5 13.25C19.5 13.4489 19.421 13.6397 19.2803 13.7803C19.1397 13.921 18.9489 14 18.75 14H5.25C5.05109 14 4.86032 13.921 4.71967 13.7803C4.57902 13.6397 4.5 13.4489 4.5 13.25Z"
                fill={color}
            />
        </svg>
    );
};

export default OCDash;
