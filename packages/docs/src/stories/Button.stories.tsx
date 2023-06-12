import type { StoryObj, Meta } from "@storybook/react"
import { Button, ButtonProps, Text } from '@redshift-ui/react'
import { parseToHsl } from "polished"
import { ArrowRight } from "phosphor-react"

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send'
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {

}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create new'
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel'
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm'
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Proxímo passo
                <ArrowRight weight="bold" />
            </>
        )
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true
    }
}

