import { SVGProps } from "@/types/SVG";

const OCCircle: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M1 12.5C1 6.425 5.925 1.5 12 1.5C18.075 1.5 23 6.425 23 12.5C23 18.575 18.075 23.5 12 23.5C5.925 23.5 1 18.575 1 12.5ZM12 3C9.48044 3 7.06408 4.00089 5.28249 5.78249C3.50089 7.56408 2.5 9.98044 2.5 12.5C2.5 15.0196 3.50089 17.4359 5.28249 19.2175C7.06408 20.9991 9.48044 22 12 22C14.5196 22 16.9359 20.9991 18.7175 19.2175C20.4991 17.4359 21.5 15.0196 21.5 12.5C21.5 9.98044 20.4991 7.56408 18.7175 5.78249C16.9359 4.00089 14.5196 3 12 3Z"
                fill={color}
            />
        </svg>
    );
};

export default OCCircle;
