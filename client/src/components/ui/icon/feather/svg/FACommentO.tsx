import { SVGProps } from "@/types/SVG";

const FACommentO: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M5 21V16.843C3.75 15.383 3 13.524 3 11.5C3 6.806 7.03 3 12 3C16.97 3 21 6.806 21 11.5C21 16.194 16.97 20 12 20C10.338 20.0054 8.7046 19.5677 7.268 18.732L5 21ZM12 18C15.866 18 19 15.09 19 11.5C19 7.91 15.866 5 12 5C8.134 5 5 7.91 5 11.5C5 15.09 8.134 18 12 18Z"
                fill={color}
            />
        </svg>
    );
};

export default FACommentO;
