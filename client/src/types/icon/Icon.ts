import { FeatherName } from "@/types/icon/name/FeatherName";
import { IoniconsName } from "@/types/icon/name/IoniconsName";
import { LucideName } from "@/types/icon/name/LucideName";
import { OcticonsName } from "@/types/icon/name/OcticonsName";

export enum IconType {
    FEATHER = "FEATHER",
    IONICONS = "IONICONS",
    OCTICONS = "OCTICONS",
    LUCIDE = "LUCIDE",
}

type IconNamesMapping = {
    [IconType.FEATHER]: FeatherName;
    [IconType.IONICONS]: IoniconsName;
    [IconType.OCTICONS]: OcticonsName;
    [IconType.LUCIDE]: LucideName;
};

export type IconName<T extends IconType> = IconNamesMapping[T];
