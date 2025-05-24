import { SVGProps } from "@/types/SVG";

const OCSquareFill: React.FC<SVGProps> = ({
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
            fill={color}
        >
            <path
                d="M7.75 6.5H16.25C17.216 6.5 18 7.284 18 8.25V16.75C18 17.2141 17.8156 17.6592 17.4874 17.9874C17.1592 18.3156 16.7141 18.5 16.25 18.5H7.75C7.28587 18.5 6.84075 18.3156 6.51256 17.9874C6.18437 17.6592 6 17.2141 6 16.75V8.25C6 7.284 6.784 6.5 7.75 6.5Z"
                fill={color}
            />
        </svg>
    );
};

export default OCSquareFill;
