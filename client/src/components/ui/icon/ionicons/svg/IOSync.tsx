import { SVGProps } from "@/types/SVG";

const IOSync: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M20.3752 13.887V12.4902C20.3752 7.86219 16.6139 4.10938 11.9752 4.10938C10.7132 4.10783 9.46724 4.39093 8.32989 4.93761C7.19253 5.48429 6.19314 6.28047 5.4061 7.26688M3.60001 11.1106V12.5075C3.60001 17.1406 7.35938 20.8906 12 20.8906C13.2583 20.8888 14.5004 20.6063 15.6357 20.0636C16.7709 19.5209 17.7708 18.7318 18.5625 17.7538"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.5 12.5L3.5625 10.4375L5.71875 12.5M22.5 12.5L20.4375 14.5625L18.2812 12.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOSync;
