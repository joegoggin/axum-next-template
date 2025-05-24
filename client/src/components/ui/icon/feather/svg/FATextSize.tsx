import { SVGProps } from "@/types/SVG";

const FATextSize: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M13.5 16.494L15.908 9.27H18.09L21 17.995H19.032L18.463 16.068H15.497L14.854 17.995H14.001L14.003 18H11.296L10.514 15.35H6.434L5.55 18H3L7 6H10L13.5 16.494ZM7 13H10L8.496 9L7 13ZM15.908 14.36H18.09L16.996 11.451L15.908 14.36Z"
                fill={color}
            />
        </svg>
    );
};

export default FATextSize;
