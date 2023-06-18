import type { StoryObj, Meta } from "@storybook/react"
import { TooltipProps, Text, Tooltip } from '@redshiftui/react'

export default {
    title: 'Alert/Tooltip',
    component: Tooltip,
    args: {
        children: '20 de junho - disponível'
    },
    argTypes: {
        children: {

        }
    }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
    args: {
        children: '20 de junho - disponível'
    }
}

