import { SVGProps } from "@/types/SVG";

const IOMic: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M9 21.5H15M18 10.25V11.75C18 15.05 15.3 17.75 12 17.75M12 17.75C8.7 17.75 6 15.05 6 11.75V10.25M12 17.75V21.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 15.5C11.505 15.4988 11.0153 15.3982 10.56 15.2042C10.1046 15.0101 9.69287 14.7266 9.34922 14.3703C8.64575 13.6608 8.25072 12.7023 8.25 11.7031V6.5C8.24808 6.007 8.34376 5.5185 8.53154 5.06266C8.71931 4.60683 8.99546 4.19267 9.34406 3.84406C9.69267 3.49546 10.1068 3.21931 10.5627 3.03154C11.0185 2.84376 11.507 2.74808 12 2.75C14.1028 2.75 15.75 4.39719 15.75 6.5V11.7031C15.75 13.7966 14.0677 15.5 12 15.5Z"
                fill={color}
            />
        </svg>
    );
};

export default IOMic;
