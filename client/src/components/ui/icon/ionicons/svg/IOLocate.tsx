import { SVGProps } from "@/types/SVG";

const IOLocate: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M12 5V3.125M12 21.875V20M19.5 12.5H21.375M2.625 12.5H4.5M12 5.75C10.665 5.75 9.35993 6.14588 8.2499 6.88758C7.13987 7.62928 6.2747 8.68349 5.76381 9.91689C5.25292 11.1503 5.11925 12.5075 5.3797 13.8169C5.64015 15.1262 6.28302 16.329 7.22703 17.273C8.17103 18.217 9.37377 18.8599 10.6831 19.1203C11.9925 19.3808 13.3497 19.2471 14.5831 18.7362C15.8165 18.2253 16.8707 17.3601 17.6124 16.2501C18.3541 15.1401 18.75 13.835 18.75 12.5C18.75 10.7098 18.0388 8.9929 16.773 7.72703C15.5071 6.46116 13.7902 5.75 12 5.75Z"
                stroke={color}
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOLocate;
