import { SVGProps } from "@/types/SVG";

const FABrush: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.261 16.011C5.04315 16.392 4.95664 16.834 5.01483 17.269C5.07301 17.704 5.27264 18.1077 5.58296 18.418C5.89327 18.7284 6.29704 18.928 6.73202 18.9862C7.167 19.0444 7.60904 18.9579 7.99 18.74C7.93031 19.3589 7.64215 19.9333 7.18175 20.3512C6.72135 20.7691 6.12176 21.0004 5.5 21H3V18.5C2.99989 17.8783 3.23146 17.2788 3.64951 16.8186C4.06757 16.3584 4.64211 16.0704 5.261 16.011ZM19 3C20.1 3 21 4.006 21 5L8 18L6 16L19 3Z"
                fill={color}
            />
        </svg>
    );
};

export default FABrush;
