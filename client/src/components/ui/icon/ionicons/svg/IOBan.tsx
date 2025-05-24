import { SVGProps } from "@/types/SVG";

const IOBan: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M12 21.875C17.1777 21.875 21.375 17.6777 21.375 12.5C21.375 7.32233 17.1777 3.125 12 3.125C6.82233 3.125 2.625 7.32233 2.625 12.5C2.625 17.6777 6.82233 21.875 12 21.875Z"
                stroke={color}
                strokeWidth="2.25"
                strokeMiterlimit="10"
            />
            <path
                d="M5.37094 5.87094L18.6291 19.1291L5.37094 5.87094Z"
                fill={color}
            />
            <path
                d="M5.37094 5.87094L18.6291 19.1291"
                stroke={color}
                strokeWidth="2.25"
                strokeMiterlimit="10"
            />
        </svg>
    );
};

export default IOBan;
