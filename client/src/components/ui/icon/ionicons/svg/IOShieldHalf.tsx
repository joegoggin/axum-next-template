import { SVGProps } from "@/types/SVG";

const IOShieldHalf: React.FC<SVGProps> = ({
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
                d="M2.29218 5.76734C6.48374 5.01547 8.21671 4.45859 12 2.75C15.7833 4.45859 17.5162 5.01547 21.7078 5.76734C22.4672 17.803 12.7228 21.9589 12 22.25C11.2772 21.9589 1.5328 17.803 2.29218 5.76734Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 2.75C15.7833 4.45859 17.5163 5.01547 21.7078 5.76734C22.4672 17.803 12.7228 21.9589 12 22.25V2.75Z"
                fill={color}
            />
        </svg>
    );
};

export default IOShieldHalf;
