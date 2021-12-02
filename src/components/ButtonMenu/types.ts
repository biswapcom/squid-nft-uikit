import { BaseButtonProps, Scale, variants } from "../Button/types";

export interface ButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export interface ButtonMenuProps {
  variant?: typeof variants.PRIMARY | typeof variants.SECONDARY | typeof variants.TRANSPARENT | typeof variants.TERTIARY | typeof variants.UNDERLINE;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scale;
  children: React.ReactElement[];
  autoWidth?: boolean;
  lineColor?: string
}
