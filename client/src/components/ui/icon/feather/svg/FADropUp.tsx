import { SVGProps } from "@/types/SVG";

const FADropUp: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M12 8L19 16H5L12 8Z"
                fill={color}
            />
        </svg>
    );
};

export default FADropUp;
