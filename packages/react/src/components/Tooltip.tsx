
import { ComponentProps } from "react";
import { styled } from "../styles";

export const Tooltip = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$gray900',
    borderRadius: '$sm',
    maxWidth: '100%',
    color: '$gray100',
    padding: '$3 $4',
    position: 'relative',

    '&::after': {
        content: '',
        position: 'absolute',
        width: '0',
        height: '0',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: '10px solid $gray900',
        bottom: '-9px'
    }
});

export interface TooltipProps extends ComponentProps<typeof Tooltip> { }



Tooltip.displayName = "Tooltip"