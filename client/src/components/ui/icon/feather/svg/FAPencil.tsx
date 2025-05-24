import { SVGProps } from "@/types/SVG";

const FAPencil: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M3 18L15 6L18 9L6 21H3V18ZM16 5L18 3L21 6L18.999 8.001L16 5Z"
                fill={color}
            />
        </svg>
    );
};

export default FAPencil;
