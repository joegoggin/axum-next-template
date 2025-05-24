import { SVGProps } from "@/types/SVG";

const FAHeart: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 20C9.795 19.52 3 15.76 3 9C3 7.95059 3.33019 6.92778 3.94379 6.07645C4.55739 5.22512 5.4233 4.58844 6.41886 4.25658C7.41442 3.92473 8.48916 3.91453 9.49084 4.22743C10.4925 4.54033 11.3704 5.16047 12 6C12.6296 5.16047 13.5075 4.54033 14.5092 4.22743C15.5108 3.91453 16.5856 3.92473 17.5811 4.25658C18.5767 4.58844 19.4426 5.22512 20.0562 6.07645C20.6698 6.92778 21 7.95059 21 9C21 15.76 14.205 19.52 12 20Z"
                fill={color}
            />
        </svg>
    );
};

export default FAHeart;
