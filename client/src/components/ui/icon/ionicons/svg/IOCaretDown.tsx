import { SVGProps } from "@/types/SVG";

const IOCaretDown: React.FC<SVGProps> = ({
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
                d="M4.59375 9.40907L11.1459 17.0553C11.2516 17.1785 11.3826 17.2774 11.53 17.3452C11.6774 17.413 11.8377 17.4481 12 17.4481C12.1623 17.4481 12.3226 17.413 12.47 17.3452C12.6174 17.2774 12.7484 17.1785 12.8541 17.0553L19.4062 9.40907C20.0316 8.67922 19.5131 7.55188 18.5522 7.55188H5.44594C4.485 7.55188 3.96656 8.67922 4.59375 9.40907Z"
                fill={color}
            />
        </svg>
    );
};

export default IOCaretDown;
