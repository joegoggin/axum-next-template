import { SVGProps } from "@/types/SVG";

const OCDotFill: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M12 18.5C13.5913 18.5 15.1174 17.8679 16.2426 16.7426C17.3679 15.6174 18 14.0913 18 12.5C18 10.9087 17.3679 9.38258 16.2426 8.25736C15.1174 7.13214 13.5913 6.5 12 6.5C10.4087 6.5 8.88258 7.13214 7.75736 8.25736C6.63214 9.38258 6 10.9087 6 12.5C6 14.0913 6.63214 15.6174 7.75736 16.7426C8.88258 17.8679 10.4087 18.5 12 18.5Z"
                fill={color}
            />
        </svg>
    );
};

export default OCDotFill;
