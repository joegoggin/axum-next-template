import { SVGProps } from "@/types/SVG";

const IOArrowDown: React.FC<SVGProps> = ({
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
                d="M5.25 13.0625L12 19.8125L18.75 13.0625M12 18.875V5.1875"
                stroke={color}
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOArrowDown;
