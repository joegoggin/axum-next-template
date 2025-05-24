import { SVGProps } from "@/types/SVG";

const FAFileImage: React.FC<SVGProps> = ({
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2H16L20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2ZM15.172 4H6V20H18V6.828H15.172V4ZM15 14C14.7348 14 14.4804 13.8946 14.2929 13.7071C14.1054 13.5196 14 13.2652 14 13C14 12.7348 14.1054 12.4804 14.2929 12.2929C14.4804 12.1054 14.7348 12 15 12C15.2652 12 15.5196 12.1054 15.7071 12.2929C15.8946 12.4804 16 12.7348 16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14ZM8 16L11.07 13L14 16L15 15L16 16V18H8V16Z"
                fill={color}
            />
        </svg>
    );
};

export default FAFileImage;
