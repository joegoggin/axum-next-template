import { SVGProps } from "@/types/SVG";

const IORefresh: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M15 7.34375C15 7.34375 16.1419 6.78125 12 6.78125C10.5166 6.78125 9.0666 7.22112 7.83323 8.04523C6.59986 8.86934 5.63856 10.0407 5.07091 11.4111C4.50325 12.7816 4.35472 14.2896 4.64411 15.7444C4.9335 17.1993 5.64781 18.5357 6.6967 19.5846C7.7456 20.6334 9.08197 21.3478 10.5368 21.6371C11.9917 21.9265 13.4997 21.778 14.8701 21.2103C16.2406 20.6427 17.4119 19.6814 18.236 18.448C19.0601 17.2147 19.5 15.7646 19.5 14.2812"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M12 3.21875L15.75 6.96875L12 10.7188"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IORefresh;
