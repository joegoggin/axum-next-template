import { SVGProps } from "@/types/SVG";

const IOCaretBack: React.FC<SVGProps> = ({
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
                d="M15.0909 5.09375L7.44469 11.6459C7.3215 11.7516 7.22263 11.8826 7.15483 12.03C7.08704 12.1774 7.05194 12.3377 7.05194 12.5C7.05194 12.6623 7.08704 12.8226 7.15483 12.97C7.22263 13.1174 7.3215 13.2485 7.44469 13.3541L15.0909 19.9063C15.8208 20.5316 16.9481 20.0131 16.9481 19.0522V5.94594C16.9481 4.985 15.8208 4.46657 15.0909 5.09375Z"
                fill={color}
            />
        </svg>
    );
};

export default IOCaretBack;
