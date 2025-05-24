import { SVGProps } from "@/types/SVG";

const FACheckCircle: React.FC<SVGProps> = ({
    width,
    height,
    color = "black",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8 10L6 12L11 17L18 10L16 8L11 13L8 10Z"
                fill={color}
            />
        </svg>
    );
};

export default FACheckCircle;
