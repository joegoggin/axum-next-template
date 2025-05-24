import { SVGProps } from "@/types/SVG";

const IOEgg: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M12 23C9.53578 23 7.46625 22.1778 6.01406 20.622C4.53281 19.0344 3.75 16.7211 3.75 13.932C3.75 11.3047 4.75687 8.375 6.51234 5.89062C8.23359 3.45312 10.2848 2 12 2C13.7152 2 15.7664 3.45312 17.4877 5.89062C19.2431 8.375 20.25 11.3047 20.25 13.932C20.25 16.7211 19.4672 19.0344 17.9859 20.622C16.5338 22.1778 14.4642 23 12 23Z"
                fill={color}
            />
        </svg>
    );
};

export default IOEgg;
