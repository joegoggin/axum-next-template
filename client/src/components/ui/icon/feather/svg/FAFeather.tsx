import { SVGProps } from "@/types/SVG";

const FAFeather: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 16 20"
            fill={color}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.993 15.877C1.99767 15.917 2 15.958 2 16V19C2 19.2652 1.89464 19.5196 1.70711 19.7071C1.51957 19.8946 1.26522 20 1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V16C0 7.163 7.163 0 16 0C16 8.162 9.889 14.896 1.993 15.877ZM2.167 13.833C5.09572 13.3729 7.80299 11.9956 9.89931 9.89931C11.9956 7.80299 13.3729 5.09572 13.833 2.167C10.9043 2.62709 8.19701 4.00438 6.10069 6.10069C4.00438 8.19701 2.62709 10.9043 2.167 13.833Z"
                fill={color}
            />
        </svg>
    );
};

export default FAFeather;
