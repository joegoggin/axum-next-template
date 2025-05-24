import { SVGProps } from "@/types/SVG";

const FAFilter: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M18 5.97V4H6V5.97L12 10.256L18 5.97ZM13 12V20L11 22V12L4.838 7.598C4.57893 7.41306 4.36774 7.16896 4.22198 6.88597C4.07623 6.60299 4.00013 6.28931 4 5.971V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V5.97C20 6.28848 19.924 6.60236 19.7782 6.88553C19.6325 7.1687 19.4212 7.41296 19.162 7.598L13 12Z"
                fill={color}
            />
        </svg>
    );
};

export default FAFilter;
