import { SVGProps } from "@/types/SVG";

const FABuilding: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M6 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V22H4V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2ZM6 20H10V16H14V20H18V4H6V20ZM13 6H16V9H13V6ZM8 11H11V14H8V11ZM13 11H16V14H13V11ZM8 6H11V9H8V6Z"
                fill={color}
            />
        </svg>
    );
};

export default FABuilding;
