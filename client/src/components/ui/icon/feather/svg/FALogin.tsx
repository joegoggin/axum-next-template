import { SVGProps } from "@/types/SVG";

const FALogin: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M9.586 11L7.05 8.464L8.464 7.05L13.414 12L8.464 16.95L7.05 15.536L9.586 13H3V11H9.586ZM11 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H11V19H19V5H11V3Z"
                fill={color}
            />
        </svg>
    );
};

export default FALogin;
