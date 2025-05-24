import { SVGProps } from "@/types/SVG";

const IOCaretUp: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M19.4063 15.5909L12.8541 7.94468C12.7485 7.8215 12.6174 7.72262 12.47 7.65483C12.3226 7.58704 12.1623 7.55194 12 7.55194C11.8377 7.55194 11.6774 7.58704 11.53 7.65483C11.3826 7.72262 11.2516 7.8215 11.1459 7.94468L4.59375 15.5909C3.96844 16.3208 4.48688 17.4481 5.44782 17.4481H18.5541C19.515 17.4481 20.0334 16.3208 19.4063 15.5909Z"
                fill={color}
            />
        </svg>
    );
};

export default IOCaretUp;
