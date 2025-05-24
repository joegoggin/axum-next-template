import { SVGProps } from "@/types/SVG";

const FAKeyboard: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M2 8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V8ZM17 14V16H20V14H17ZM14 14V16H16V14H14ZM7 14V16H13V14H7ZM4 14V16H6V14H4ZM18 11V13H20V11H18ZM15 11V13H17V11H15ZM12 11V13H14V11H12ZM9 11V13H11V11H9ZM4 11V13H8V11H4ZM16 8V10H20V8H16ZM13 8V10H15V8H13ZM10 8V10H12V8H10ZM7 8V10H9V8H7ZM4 8V10H6V8H4Z"
                fill={color}
            />
        </svg>
    );
};

export default FAKeyboard;
