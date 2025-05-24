import { SVGProps } from "@/types/SVG";

const IOEllipsisVertical: React.FC<SVGProps> = ({
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
                d="M12 22.25C13.2426 22.25 14.25 21.2426 14.25 20C14.25 18.7574 13.2426 17.75 12 17.75C10.7574 17.75 9.75 18.7574 9.75 20C9.75 21.2426 10.7574 22.25 12 22.25Z"
                fill={color}
            />
            <path
                d="M12 7.25C13.2426 7.25 14.25 6.24264 14.25 5C14.25 3.75736 13.2426 2.75 12 2.75C10.7574 2.75 9.75 3.75736 9.75 5C9.75 6.24264 10.7574 7.25 12 7.25Z"
                fill={color}
            />
        </svg>
    );
};

export default IOEllipsisVertical;
