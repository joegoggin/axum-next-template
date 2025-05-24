import FeatherIcon from "@/components/ui/icon/feather/FeatherIcon";
import IoniconsIcon from "@/components/ui/icon/ionicons/IoniconsIcon";
import LucideIcon from "@/components/ui/icon/lucide/LucideIcon";
import OcticonsIcon from "@/components/ui/icon/octicons/OctioconsIcon";
import { IconName, IconType } from "@/types/icon/Icon";

export type IconProps<T extends IconType> = {
    size: number;
    color?: string;
    type: T;
    name: IconName<T>;
};

const Icon = <T extends IconType>({
    size,
    color,
    type,
    name,
}: IconProps<T>) => {
    switch (type) {
        case IconType.FEATHER:
            return (
                <FeatherIcon
                    name={name as IconName<IconType.FEATHER>}
                    size={size}
                    color={color}
                />
            );
        case IconType.IONICONS:
            return (
                <IoniconsIcon
                    name={name as IconName<IconType.IONICONS>}
                    size={size}
                    color={color}
                />
            );
        case IconType.OCTICONS:
            return (
                <OcticonsIcon
                    name={name as IconName<IconType.OCTICONS>}
                    size={size}
                    color={color}
                />
            );
        case IconType.LUCIDE:
            return (
                <LucideIcon
                    name={name as IconName<IconType.LUCIDE>}
                    size={size}
                    color={color}
                />
            );
        default:
            return <></>;
    }
};

export default Icon;
