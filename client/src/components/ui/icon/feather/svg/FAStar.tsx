import { SVGProps } from "@/types/SVG";

const FAStar: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M12.5 17.925L6.629 21L7.75 14.488L3 9.875L9.564 8.925L12.5 3L15.436 8.925L22 9.875L17.25 14.488L18.371 21L12.5 17.925Z"
                fill={color}
            />
        </svg>
    );
};

export default FAStar;
