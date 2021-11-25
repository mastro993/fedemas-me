import {IconType} from "react-icons";

export interface SkillItem {
    icon: IconType
    label: string
}

export interface SkillItemGroup {
    label: string,
    color: string,
    items: SkillItem[],
}