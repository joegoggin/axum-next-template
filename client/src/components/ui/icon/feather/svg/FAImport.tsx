import { SVGProps } from "@/types/SVG";

const FAImport: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 13.175L16.243 9.933L17.657 11.347L12 17.004L6.343 11.347L7.757 9.933L11 13.175V2H13V13.175ZM4 16H6V20H18V16H20V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.037 4 20V16Z"
                fill={color}
            />
        </svg>
    );
};

export default FAImport;
