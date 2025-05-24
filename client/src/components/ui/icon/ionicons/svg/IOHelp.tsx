import { SVGProps } from "@/types/SVG";

const IOHelp: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M7.5 8.1875C7.5 8.1875 7.5675 6.64063 9.07219 5.40031C9.96562 4.66391 11.0386 4.45063 12 4.4375C12.878 4.42672 13.6627 4.57531 14.1319 4.80406C14.9339 5.19688 16.5 6.15313 16.5 8.1875C16.5 10.3283 15.1322 11.2986 13.5773 12.3678C12.0225 13.437 11.625 14.4856 11.625 15.6875"
                stroke={color}
                strokeWidth="1.875"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M11.625 20.7495C12.4534 20.7495 13.125 20.078 13.125 19.2495C13.125 18.4211 12.4534 17.7495 11.625 17.7495C10.7966 17.7495 10.125 18.4211 10.125 19.2495C10.125 20.078 10.7966 20.7495 11.625 20.7495Z"
                fill={color}
            />
        </svg>
    );
};

export default IOHelp;
