import { SVGProps } from "@/types/SVG";

const FAMoon: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M12.97 3C11.7346 3.70288 10.7082 4.72146 9.99582 5.95145C9.28348 7.18143 8.91082 8.57864 8.916 10C8.916 14.418 12.438 18 16.782 18C17.928 18 19.018 17.75 20 17.302C18.39 19.544 15.787 21 12.849 21C7.962 21 4 16.97 4 12C4 7.03 7.962 3 12.849 3H12.97Z"
                fill={color}
            />
        </svg>
    );
};

export default FAMoon;
