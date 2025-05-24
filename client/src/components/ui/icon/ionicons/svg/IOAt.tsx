import { SVGProps } from "@/types/SVG";

const IOAt: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M15 12.4189C14.7891 14.8095 13.1194 16.1689 11.2242 16.1689C9.32906 16.1689 8.06765 14.4899 8.25 12.4189C8.43234 10.348 9.99 8.66891 11.8852 8.66891C13.7803 8.66891 15.1819 10.3564 15 12.4189Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.9892 19.9892C13.6505 20.5517 12.773 20.6689 11.273 20.6689C6.71672 20.6689 3.35109 16.9752 3.75 12.4189C4.14891 7.86266 8.17078 4.16891 12.727 4.16891C17.8594 4.16891 20.6808 7.53126 20.2842 12.0313C19.9884 15.3908 17.8416 16.3588 16.7175 16.1595C15.66 15.972 14.7872 15.0149 14.9484 13.183L15.3459 8.67126"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOAt;
