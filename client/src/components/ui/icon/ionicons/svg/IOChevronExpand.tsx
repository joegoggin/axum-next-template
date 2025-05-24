import { SVGProps } from "@/types/SVG";

const IOChevronExpand: React.FC<SVGProps> = ({
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
                d="M6.375 10.25L12 5.375L17.625 10.25M6.375 14.75L12 19.625L17.625 14.75"
                stroke={color}
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOChevronExpand;
