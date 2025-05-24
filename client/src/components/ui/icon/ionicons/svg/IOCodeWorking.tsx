import { SVGProps } from "@/types/SVG";

const IOCodeWorking: React.FC<SVGProps> = ({
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
                d="M12 13.7188C12.6731 13.7188 13.2188 13.1731 13.2188 12.5C13.2188 11.8269 12.6731 11.2812 12 11.2812C11.3269 11.2812 10.7812 11.8269 10.7812 12.5C10.7812 13.1731 11.3269 13.7188 12 13.7188Z"
                fill={color}
                stroke={color}
                strokeWidth="0.46875"
                strokeMiterlimit="10"
            />
            <path
                d="M16.2188 13.7188C16.8918 13.7188 17.4375 13.1731 17.4375 12.5C17.4375 11.8269 16.8918 11.2812 16.2188 11.2812C15.5457 11.2812 15 11.8269 15 12.5C15 13.1731 15.5457 13.7188 16.2188 13.7188Z"
                fill={color}
                stroke={color}
                strokeWidth="0.46875"
                strokeMiterlimit="10"
            />
            <path
                d="M7.78125 13.7188C8.45435 13.7188 9 13.1731 9 12.5C9 11.8269 8.45435 11.2812 7.78125 11.2812C7.10815 11.2812 6.5625 11.8269 6.5625 12.5C6.5625 13.1731 7.10815 13.7188 7.78125 13.7188Z"
                fill={color}
                stroke={color}
                strokeWidth="0.46875"
                strokeMiterlimit="10"
            />
            <path
                d="M7.5 17.75L1.5 12.5L7.5 7.25M16.5 17.75L22.5 12.5L16.5 7.25"
                stroke={color}
                strokeWidth="1.96875"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOCodeWorking;
