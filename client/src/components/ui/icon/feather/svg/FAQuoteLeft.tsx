import { SVGProps } from "@/types/SVG";

const FAQuoteLeft: React.FC<SVGProps> = ({
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
                d="M7 21C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17C3 15.5267 4.33333 10.86 7 3H9L7 13C8.06087 13 9.07828 13.4214 9.82843 14.1716C10.5786 14.9217 11 15.9391 11 17C11 18.0609 10.5786 19.0783 9.82843 19.8284C9.07828 20.5786 8.06087 21 7 21ZM17 21C15.9391 21 14.9217 20.5786 14.1716 19.8284C13.4214 19.0783 13 18.0609 13 17C13 15.5267 14.3333 10.86 17 3H19L17 13C18.0609 13 19.0783 13.4214 19.8284 14.1716C20.5786 14.9217 21 15.9391 21 17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21Z"
                fill={color}
            />
        </svg>
    );
};

export default FAQuoteLeft;
