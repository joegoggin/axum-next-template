import { SVGProps } from "@/types/SVG";

const FADropLeft: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M16 5L8 12L16 19V5Z"
                fill={color}
            />
        </svg>
    );
};

export default FADropLeft;
