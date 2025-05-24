import { SVGProps } from "@/types/SVG";

const FABookmark: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M18 4H6V18.764L12 15.764L18 18.764V4ZM6 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V22L12 18L4 22V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2ZM14 6H16V12H14V6Z"
                fill={color}
            />
        </svg>
    );
};

export default FABookmark;
