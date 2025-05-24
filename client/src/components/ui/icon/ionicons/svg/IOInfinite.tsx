import { SVGProps } from "@/types/SVG";

const IOInfinite: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M9.75 15.5C8.73984 16.3822 7.5 17 6.09375 17C3.55688 17 1.5 14.9844 1.5 12.5C1.5 10.0156 3.55688 8 6.09375 8C9.75 8 12 12.5 12 12.5C12 12.5 14.25 17 17.9062 17C20.4431 17 22.5 14.9844 22.5 12.5C22.5 10.0156 20.4431 8 17.9062 8C16.5295 8 15.2503 8.64453 14.25 9.5"
                stroke={color}
                strokeWidth="2.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default IOInfinite;
