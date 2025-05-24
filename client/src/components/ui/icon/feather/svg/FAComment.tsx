import { SVGProps } from "@/types/SVG";

const FAComment: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
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
                d="M7.268 18.732L5 21V16.843C3.75 15.383 3 13.524 3 11.5C3 6.806 7.03 3 12 3C16.97 3 21 6.806 21 11.5C21 16.194 16.97 20 12 20C10.338 20.0054 8.7046 19.5677 7.268 18.732Z"
                fill={color}
            />
        </svg>
    );
};

export default FAComment;
