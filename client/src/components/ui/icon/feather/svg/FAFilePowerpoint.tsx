import { SVGProps } from "@/types/SVG";

const FAFilePowerpoint: React.FC<SVGProps> = ({
    width,
    height,
    color = "black",
}) => {
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
                d="M6 2H16L20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2ZM15.172 4H6V20H18V6.828H15.172V4ZM10 16V18H8V10H13C13.7956 10 14.5587 10.3161 15.1213 10.8787C15.6839 11.4413 16 12.2044 16 13C16 13.7956 15.6839 14.5587 15.1213 15.1213C14.5587 15.6839 13.7956 16 13 16H10ZM10 12V14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13C14 12.7348 13.8946 12.4804 13.7071 12.2929C13.5196 12.1054 13.2652 12 13 12H10Z"
                fill={color}
            />
        </svg>
    );
};

export default FAFilePowerpoint;
