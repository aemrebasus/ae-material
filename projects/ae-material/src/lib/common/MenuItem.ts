import { IconType } from './IconType';

type TooltipPosition = 'right' | 'left' | 'above' | 'below' | 'before' | 'after';

export class MenuItem {
    id?: number | string;
    value?: string;
    route?: string;
    icon?: IconType;
    toogle?: IconType;
    tooltip?: string;
    action?: () => void;
    tooltipPosition?: TooltipPosition;
    location?: 'left' | 'right' | 'top' | 'bottom';
    badge?: string;
    color?: 'accent' | 'primary' | 'warn';
    active?: boolean;
}

