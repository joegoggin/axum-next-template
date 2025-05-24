import { SVGProps } from "@/types/SVG";

const IOBatteryHalf: React.FC<SVGProps> = ({
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
            fill="none"
        >
            <path
                d="M18.1078 7.25H3.64219C2.45909 7.25 1.5 8.20909 1.5 9.39219V15.6078C1.5 16.7909 2.45909 17.75 3.64219 17.75H18.1078C19.2909 17.75 20.25 16.7909 20.25 15.6078V9.39219C20.25 8.20909 19.2909 7.25 18.1078 7.25Z"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="square"
            />
            <path
                d="M11.0625 9.82483H4.20422C4.10067 9.82483 4.01672 9.90878 4.01672 10.0123V14.9872C4.01672 15.0907 4.10067 15.1747 4.20422 15.1747H11.0625C11.1661 15.1747 11.25 15.0907 11.25 14.9872V10.0123C11.25 9.90878 11.1661 9.82483 11.0625 9.82483Z"
                fill={color}
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="square"
            />
            <path
                d="M22.5 10.7502V14.2498"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default IOBatteryHalf;
