import LUEdit from "@/components/ui/icon/lucide/svg/LUEdit";
import LUFilter from "@/components/ui/icon/lucide/svg/LUFilter";
import LULayoutGrid from "@/components/ui/icon/lucide/svg/LULayoutGrid";
import LULayoutList from "@/components/ui/icon/lucide/svg/LULayoutList";
import LUList from "@/components/ui/icon/lucide/svg/LUList";
import LUMenu from "@/components/ui/icon/lucide/svg/LUMenu";
import LURows3 from "@/components/ui/icon/lucide/svg/LURows3";
import LUServer from "@/components/ui/icon/lucide/svg/LUServer";
import LUStretchHorizontal from "@/components/ui/icon/lucide/svg/LUStretchHorizontal";
import { IconName, IconType } from "@/types/icon/Icon";

type LucideIconProps = {
    name: IconName<IconType.LUCIDE>;
    size: number;
    color?: string;
};

const LucideIcon: React.FC<LucideIconProps> = ({ name, size, color }) => {
    switch (name) {
        case "filter":
            return <LUFilter width={size} height={size} color={color} />;
        case "stretch-horizontal":
            return (
                <LUStretchHorizontal width={size} height={size} color={color} />
            );
        case "server":
            return <LUServer width={size} height={size} color={color} />;
        case "rows-3":
            return <LURows3 width={size} height={size} color={color} />;
        case "menu":
            return <LUMenu width={size} height={size} color={color} />;
        case "layout-list":
            return <LULayoutList width={size} height={size} color={color} />;
        case "layout-grid":
            return <LULayoutGrid width={size} height={size} color={color} />;
        case "list":
            return <LUList width={size} height={size} color={color} />;
        case "edit":
            return <LUEdit width={size} height={size} color={color} />;
        default:
            return <></>;
    }
};

export default LucideIcon;
