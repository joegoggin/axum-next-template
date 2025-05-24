import { SVGProps } from "@/types/SVG";

const IOBatteryDead: React.FC<SVGProps> = ({
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
                d="M18.0609 7.25H3.59531C2.41221 7.25 1.45312 8.20909 1.45312 9.39219V15.6078C1.45312 16.7909 2.41221 17.75 3.59531 17.75H18.0609C19.244 17.75 20.2031 16.7909 20.2031 15.6078V9.39219C20.2031 8.20909 19.244 7.25 18.0609 7.25Z"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="square"
            />
            <path
                d="M22.4531 10.7502V14.2498"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default IOBatteryDead;
