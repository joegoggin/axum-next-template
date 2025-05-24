import { SVGProps } from "@/types/SVG";

const OCFileDirectoryFill: React.FC<SVGProps> = ({
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
                d="M2 5.25C2 4.284 2.784 3.5 3.75 3.5H8.721C9.301 3.5 9.841 3.786 10.168 4.265L11.572 6.328C11.618 6.397 11.696 6.438 11.779 6.438H20.25C21.216 6.438 22 7.221 22 8.188V19.75C22 20.2141 21.8156 20.6592 21.4874 20.9874C21.1592 21.3156 20.7141 21.5 20.25 21.5H3.75C3.28587 21.5 2.84075 21.3156 2.51256 20.9874C2.18437 20.6592 2 20.2141 2 19.75V5.25Z"
                fill={color}
            />
        </svg>
    );
};

export default OCFileDirectoryFill;
