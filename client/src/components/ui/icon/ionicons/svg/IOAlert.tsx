import { SVGProps } from "@/types/SVG";

const IOAlert: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M12 4.25C11.5941 4.25 11.2228 4.595 11.25 5L11.625 15.125C11.625 15.2245 11.6645 15.3198 11.7348 15.3902C11.8052 15.4605 11.9005 15.5 12 15.5C12.0995 15.5 12.1948 15.4605 12.2652 15.3902C12.3355 15.3198 12.375 15.2245 12.375 15.125L12.75 5C12.7772 4.595 12.4059 4.25 12 4.25Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 20.75C12.4142 20.75 12.75 20.4142 12.75 20C12.75 19.5858 12.4142 19.25 12 19.25C11.5858 19.25 11.25 19.5858 11.25 20C11.25 20.4142 11.5858 20.75 12 20.75Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOAlert;
