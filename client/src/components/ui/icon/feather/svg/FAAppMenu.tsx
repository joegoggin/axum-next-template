import { SVGProps } from "@/types/SVG";

const FAAppMenu: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M16 16H20V20H16V16ZM10 16H14V20H10V16ZM4 16H8V20H4V16ZM16 10H20V14H16V10ZM10 10H14V14H10V10ZM4 10H8V14H4V10ZM16 4H20V8H16V4ZM10 4H14V8H10V4ZM4 4H8V8H4V4Z"
                fill={color}
            />
        </svg>
    );
};

export default FAAppMenu;
