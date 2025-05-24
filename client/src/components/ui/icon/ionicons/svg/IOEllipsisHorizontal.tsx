import { SVGProps } from "@/types/SVG";

const IOEllipsisHorizontal: React.FC<SVGProps> = ({
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
                d="M12 14.75C13.2426 14.75 14.25 13.7426 14.25 12.5C14.25 11.2574 13.2426 10.25 12 10.25C10.7574 10.25 9.75 11.2574 9.75 12.5C9.75 13.7426 10.7574 14.75 12 14.75Z"
                fill={color}
            />
            <path
                d="M19.5 14.75C20.7426 14.75 21.75 13.7426 21.75 12.5C21.75 11.2574 20.7426 10.25 19.5 10.25C18.2574 10.25 17.25 11.2574 17.25 12.5C17.25 13.7426 18.2574 14.75 19.5 14.75Z"
                fill={color}
            />
            <path
                d="M4.5 14.75C5.74264 14.75 6.75 13.7426 6.75 12.5C6.75 11.2574 5.74264 10.25 4.5 10.25C3.25736 10.25 2.25 11.2574 2.25 12.5C2.25 13.7426 3.25736 14.75 4.5 14.75Z"
                fill={color}
            />
        </svg>
    );
};

export default IOEllipsisHorizontal;
