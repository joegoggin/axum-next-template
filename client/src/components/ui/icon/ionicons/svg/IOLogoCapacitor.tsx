import { SVGProps } from "@/types/SVG";

const IOLogoCapacitor: React.FC<SVGProps> = ({
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
            fill={color}
        >
            <path
                d="M22.5 5.23859L17.4548 10.2838L22.4639 15.3022L19.2155 18.5506L5.93953 5.27422L9.1875 2.02531L14.2064 7.03531L19.2502 2L22.5 5.23859ZM1.52578 9.6875L4.77422 6.43859L18.0502 19.7155L14.8017 22.9639L9.78609 17.9544L4.73813 23L1.5 19.7502L6.53531 14.7059L1.52578 9.6875Z"
                fill={color}
            />
        </svg>
    );
};

export default IOLogoCapacitor;
