import { SVGProps } from "@/types/SVG";

const IOReload: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M18.75 7.43751L17.76 6.28579C16.9206 5.40415 15.9106 4.70252 14.7914 4.2236C13.6722 3.74468 12.4673 3.49849 11.25 3.50001C6.28125 3.50001 2.25 7.53126 2.25 12.5C2.25 17.4688 6.28125 21.5 11.25 21.5C13.1114 21.4999 14.927 20.9229 16.447 19.8484C17.967 18.7739 19.1166 17.2548 19.7377 15.5"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M21.75 5.06657V10.25C21.75 10.4489 21.671 10.6397 21.5303 10.7803C21.3897 10.921 21.1989 11 21 11H15.8166C15.1481 11 14.8134 10.1924 15.2859 9.71985L20.4698 4.53595C20.9423 4.06251 21.75 4.39813 21.75 5.06657Z"
                fill={color}
            />
        </svg>
    );
};

export default IOReload;
