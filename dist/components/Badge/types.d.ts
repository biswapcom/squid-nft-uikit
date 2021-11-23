export interface BadgeProps {
    badgeType: "new" | "hot" | "light" | "dark" | "primary" | "warning" | string;
    fontSize?: string;
    fontWeight?: string;
    isMenu?: boolean;
    lineHeight?: string;
}
