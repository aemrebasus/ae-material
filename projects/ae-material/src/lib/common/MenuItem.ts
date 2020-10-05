import { IconType } from './IconType';

type TooltipPosition = 'right' | 'left' | 'above' | 'below' | 'before' | 'after';

export class MenuItem {
    value?: string;
    route?: string;
    icon?: IconType;
    tooltip?: string;
    action?: () => void;
    tooltipPosition?: TooltipPosition;
}
