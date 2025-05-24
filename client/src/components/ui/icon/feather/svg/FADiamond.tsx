import { SVGProps } from "@/types/SVG";

const FADiamond: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                d="M12 17.876L18.626 9.924L16.164 5H7.836L5.374 9.924L12 17.876ZM6.6 3H17.4L21 10.2L12 21L3 10.2L6.6 3Z"
                fill={color}
            />
        </svg>
    );
};

export default FADiamond;
