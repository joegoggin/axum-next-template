import { SVGProps } from "@/types/SVG";

const FARandom: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M4 17C3.73478 17 3.48043 16.8946 3.29289 16.7071C3.10536 16.5196 3 16.2652 3 16C3 15.7348 3.10536 15.4804 3.29289 15.2929C3.48043 15.1054 3.73478 15 4 15H6L9 12L6 9H4C3.74252 8.98848 3.49941 8.87809 3.32128 8.69182C3.14315 8.50554 3.04373 8.25774 3.04373 8C3.04373 7.74226 3.14315 7.49446 3.32128 7.30818C3.49941 7.12191 3.74252 7.01152 4 7H7L11 11L15 7H17V5L21 8.001L17 11V9H16L13 12L16 15H17V13L21 16L17 19V17H15L11 13L7 17H4Z"
                fill={color}
            />
        </svg>
    );
};

export default FARandom;
