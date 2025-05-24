import { SVGProps } from "@/types/SVG";

const IOLink: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M9.40594 17H6.75C5.55653 17 4.41193 16.5259 3.56802 15.682C2.72411 14.8381 2.25 13.6935 2.25 12.5C2.25 11.3065 2.72411 10.1619 3.56802 9.31802C4.41193 8.47411 5.55653 8 6.75 8H9.34734M14.6527 8H17.25C18.4435 8 19.5881 8.47411 20.432 9.31802C21.2759 10.1619 21.75 11.3065 21.75 12.5C21.75 13.6935 21.2759 14.8381 20.432 15.682C19.5881 16.5259 18.4435 17 17.25 17H14.5941M7.92516 12.5H16.1686"
                stroke={color}
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOLink;
