import { SVGProps } from "@/types/SVG";

const FABold: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M5 20V4C5 2.9 5.9 2 7 2H12C15 2 17.966 3.4 18 6.919C18 8.757 17.069 10.649 15.468 11.243V11.378C17.501 11.892 19 13.405 19 16.108C19 17.13 18.797 18.013 18.427 18.761C17.337 20.96 15.09 22 12 22H7C5.9 22 5 21.1 5 20ZM8 19H12C14.566 19 16 17.8 16 16C16 14.2 14.592 13 12 13H8V19ZM8 10H11C13.388 10 15 9.15 15 7.45C15 5.75 13.5 5 10.996 5H8V10Z"
                fill={color}
            />
        </svg>
    );
};

export default FABold;
