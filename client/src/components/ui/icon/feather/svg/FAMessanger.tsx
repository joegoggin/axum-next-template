import { SVGProps } from "@/types/SVG";

const FAMessanger: React.FC<SVGProps> = ({
    width,
    height,
    color = "black",
}) => {
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
                d="M12.942 14.413L10.382 11.753L5.45 14.48L10.856 8.744L13.416 11.404L18.346 8.677L12.942 14.413ZM11.899 2C6.432 2 2 6.144 2 11.257C2 14.165 3.434 16.76 5.678 18.457V22L9.056 20.126C9.956 20.378 10.911 20.514 11.899 20.514C17.367 20.514 21.799 16.369 21.799 11.257C21.799 6.144 17.367 2 11.899 2Z"
                fill={color}
            />
        </svg>
    );
};

export default FAMessanger;
