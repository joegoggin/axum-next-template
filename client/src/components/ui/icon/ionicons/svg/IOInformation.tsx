import { SVGProps } from "@/types/SVG";

const IOInformation: React.FC<SVGProps> = ({
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
                d="M9.1875 10.8125H12.1875V18.875"
                stroke={color}
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.76562 19.0625H15.2344"
                stroke={color}
                strokeWidth="1.875"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M12 8C11.7033 8 11.4133 7.91203 11.1666 7.74721C10.92 7.58238 10.7277 7.34811 10.6142 7.07403C10.5006 6.79994 10.4709 6.49834 10.5288 6.20737C10.5867 5.91639 10.7296 5.64912 10.9393 5.43934C11.1491 5.22956 11.4164 5.0867 11.7074 5.02882C11.9983 4.97094 12.2999 5.00065 12.574 5.11418C12.8481 5.22771 13.0824 5.41997 13.2472 5.66665C13.412 5.91332 13.5 6.20333 13.5 6.5C13.5 6.89783 13.342 7.27936 13.0607 7.56066C12.7794 7.84197 12.3978 8 12 8Z"
                fill={color}
            />
        </svg>
    );
};

export default IOInformation;
