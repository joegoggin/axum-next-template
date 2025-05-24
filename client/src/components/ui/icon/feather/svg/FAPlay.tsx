import { SVGProps } from "@/types/SVG";

const FAPlay: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M6 5.912C6 5.757 6.037 5.605 6.107 5.469C6.337 5.029 6.857 4.87 7.27 5.115L17.56 11.203C17.7 11.286 17.815 11.409 17.892 11.558C18.122 11.998 17.972 12.553 17.56 12.797L7.27 18.885C7.14478 18.9605 7.00124 19.0003 6.855 19C6.383 19 6 18.592 6 18.089V5.912Z"
                fill={color}
            />
        </svg>
    );
};

export default FAPlay;
