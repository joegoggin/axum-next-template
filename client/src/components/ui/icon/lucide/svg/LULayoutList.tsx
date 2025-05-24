import { SVGProps } from "@/types/SVG";

const LULayoutList: React.FC<SVGProps> = ({
    width,
    height,
    color = "black",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M7 1H2C1.44772 1 1 1.44772 1 2V7C1 7.55228 1.44772 8 2 8H7C7.55228 8 8 7.55228 8 7V2C8 1.44772 7.55228 1 7 1Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7 12H2C1.44772 12 1 12.4477 1 13V18C1 18.5523 1.44772 19 2 19H7C7.55228 19 8 18.5523 8 18V13C8 12.4477 7.55228 12 7 12Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 2H19M12 7H19M12 13H19M12 18H19"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default LULayoutList;
