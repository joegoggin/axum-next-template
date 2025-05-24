import { SVGProps } from "@/types/SVG";

const FATumblerGlass: React.FC<SVGProps> = ({
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
                d="M7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V15C19 16.5913 18.3679 18.1174 17.2426 19.2426C16.1174 20.3679 14.5913 21 13 21H11C9.4087 21 7.88258 20.3679 6.75736 19.2426C5.63214 18.1174 5 16.5913 5 15V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3ZM7 5V14H17V5H7Z"
                fill={color}
            />
        </svg>
    );
};

export default FATumblerGlass;
