import { SVGProps } from "@/types/SVG";

const FAPrint: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M7 11V4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V11H18C18.5304 11 19.0391 11.2107 19.4142 11.5858C19.7893 11.9609 20 12.4696 20 13V16C20 17.1 19.1 18 18 18H17V20C17 20.5304 16.7893 21.0391 16.4142 21.4142C16.0391 21.7893 15.5304 22 15 22H9C8.46957 22 7.96086 21.7893 7.58579 21.4142C7.21071 21.0391 7 20.5304 7 20V18H6C4.9 18 4 17.1 4 16V13C4 12.4696 4.21071 11.9609 4.58579 11.5858C4.96086 11.2107 5.46957 11 6 11H7ZM9 4V11H15V4H9ZM14 13V15H16V13H14ZM9 18V20H15V18H9Z"
                fill={color}
            />
        </svg>
    );
};

export default FAPrint;
