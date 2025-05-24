import { SVGProps } from "@/types/SVG";

const IOCodeDownload: React.FC<SVGProps> = ({
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
                d="M7.5 17.75L1.5 12.5L7.5 7.25M16.5 17.75L22.5 12.5L16.5 7.25M9 14.0047L12 17L15 14.0047M12 8V16.2514"
                stroke={color}
                strokeWidth="1.96875"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IOCodeDownload;
