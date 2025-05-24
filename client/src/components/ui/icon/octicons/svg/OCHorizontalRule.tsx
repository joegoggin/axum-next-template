import { SVGProps } from "@/types/SVG";

const OCHorizontalRule: React.FC<SVGProps> = ({
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
                d="M2 13.25C2 13.0511 2.07902 12.8603 2.21967 12.7197C2.36032 12.579 2.55109 12.5 2.75 12.5H21.25C21.4489 12.5 21.6397 12.579 21.7803 12.7197C21.921 12.8603 22 13.0511 22 13.25C22 13.4489 21.921 13.6397 21.7803 13.7803C21.6397 13.921 21.4489 14 21.25 14H2.75C2.55109 14 2.36032 13.921 2.21967 13.7803C2.07902 13.6397 2 13.4489 2 13.25Z"
                fill={color}
            />
        </svg>
    );
};

export default OCHorizontalRule;
