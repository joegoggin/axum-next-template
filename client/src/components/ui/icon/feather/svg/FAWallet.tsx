import { SVGProps } from "@/types/SVG";

const FAWallet: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M20 9C21.1 9 22 9.9 22 11V13C22 14.1 21.1 15 20 15V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V9ZM18 9V6H4V18H18V15H16C14.9 15 14 13.9 14 13V11.032C14 9.9 14.9 9 16 9H18ZM16 13H18V11H16V13Z"
                fill={color}
            />
        </svg>
    );
};

export default FAWallet;
