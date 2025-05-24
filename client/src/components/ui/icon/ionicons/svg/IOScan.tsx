import { SVGProps } from "@/types/SVG";

const IOScan: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M16.0312 21.3125H18.1875C18.8837 21.3125 19.5514 21.0359 20.0437 20.5437C20.5359 20.0514 20.8125 19.3837 20.8125 18.6875V16.5312M20.8125 8.46875V6.3125C20.8125 5.61631 20.5359 4.94863 20.0437 4.45634C19.5514 3.96406 18.8837 3.6875 18.1875 3.6875H16.0312M7.96875 21.3125H5.8125C5.11631 21.3125 4.44863 21.0359 3.95634 20.5437C3.46406 20.0514 3.1875 19.3837 3.1875 18.6875V16.5312M3.1875 8.46875V6.3125C3.1875 5.61631 3.46406 4.94863 3.95634 4.45634C4.44863 3.96406 5.11631 3.6875 5.8125 3.6875H7.96875"
                stroke={color}
                strokeWidth="2.0625"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOScan;
