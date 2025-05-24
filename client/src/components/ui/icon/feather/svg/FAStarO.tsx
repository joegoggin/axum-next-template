import { SVGProps } from "@/types/SVG";

const FAStarO: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M9.282 17.362L12.5 15.677L15.718 17.362L15.103 13.792L17.707 11.265L14.109 10.745L12.5 7.496L10.891 10.743L7.293 11.263L9.897 13.792L9.282 17.362ZM12.5 17.925L6.629 21L7.75 14.488L3 9.875L9.564 8.925L12.5 3L15.436 8.925L22 9.875L17.25 14.488L18.371 21L12.5 17.925Z"
                fill={color}
            />
        </svg>
    );
};

export default FAStarO;
