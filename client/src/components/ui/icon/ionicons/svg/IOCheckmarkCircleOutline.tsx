import { SVGProps } from "@/types/SVG";

const IOCheckmarkCircleOutline: React.FC<SVGProps> = ({
    width,
    height,
    color = "black",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M21 12.5C21 7.53125 16.9688 3.5 12 3.5C7.03125 3.5 3 7.53125 3 12.5C3 17.4688 7.03125 21.5 12 21.5C16.9688 21.5 21 17.4688 21 12.5Z"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
            />
            <path
                d="M16.5 8.75L10.2 16.25L7.5 13.25"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOCheckmarkCircleOutline;
