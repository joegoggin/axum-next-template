import { SVGProps } from "@/types/SVG";

const IOJournal: React.FC<SVGProps> = ({ width, height, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill={color}
        >
            <path
                d="M13.5938 2H6.75C5.95462 2.00087 5.19206 2.31722 4.62964 2.87964C4.06722 3.44206 3.75087 4.20462 3.75 5V20C3.75087 20.7954 4.06722 21.5579 4.62964 22.1204C5.19206 22.6828 5.95462 22.9991 6.75 23H13.5938V2ZM17.25 2H16.4062V23H17.25C18.0454 22.9991 18.8079 22.6828 19.3704 22.1204C19.9328 21.5579 20.2491 20.7954 20.25 20V5C20.2491 4.20462 19.9328 3.44206 19.3704 2.87964C18.8079 2.31722 18.0454 2.00087 17.25 2Z"
                fill={color}
            />
        </svg>
    );
};

export default IOJournal;
