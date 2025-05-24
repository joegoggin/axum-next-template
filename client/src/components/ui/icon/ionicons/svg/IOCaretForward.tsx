import { SVGProps } from "@/types/SVG";

const IOCaretForward: React.FC<SVGProps> = ({
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
                d="M8.90907 19.9062L16.5553 13.3541C16.6785 13.2484 16.7774 13.1174 16.8452 12.97C16.913 12.8226 16.9481 12.6622 16.9481 12.5C16.9481 12.3377 16.913 12.1774 16.8452 12.03C16.7774 11.8826 16.6785 11.7515 16.5553 11.6459L8.90907 5.09374C8.17922 4.46843 7.05188 4.98686 7.05188 5.9478V19.0541C7.05188 20.015 8.17922 20.5334 8.90907 19.9062Z"
                fill={color}
            />
        </svg>
    );
};

export default IOCaretForward;
