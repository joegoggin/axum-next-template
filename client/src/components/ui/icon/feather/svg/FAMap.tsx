import { SVGProps } from "@/types/SVG";

const FAMap: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M9 17L15 18.955V7.045L9 5V17ZM3 5L9 3L15 5L21 3V19L15 21L9 19L3 21V5Z"
                fill={color}
            />
        </svg>
    );
};

export default FAMap;
