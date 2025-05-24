import { SVGProps } from "@/types/SVG";

const FAFlag: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M6 12V21C6 21.2652 5.89464 21.5196 5.70711 21.7071C5.51957 21.8946 5.26522 22 5 22C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V4C4 2.9 4.9 2 6 2H12C13.1 2 13.999 2.9 13.999 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14H13C12.4701 13.9992 11.9621 13.7881 11.5877 13.4132C11.2133 13.0382 11.003 12.5299 11.003 12H6ZM6 4V10H13V12H18.002V6H12V4H6Z"
                fill={color}
            />
        </svg>
    );
};

export default FAFlag;
