import { SVGProps } from "@/types/SVG";

const FACode: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M21.004 11.657L15.347 17.314L13.933 15.899L18.175 11.657L13.933 7.414L15.347 6L21.004 11.657ZM5.828 11.657L10.071 15.899L8.657 17.314L3 11.657L8.657 6L10.071 7.414L5.828 11.657Z"
                fill={color}
            />
        </svg>
    );
};

export default FACode;
