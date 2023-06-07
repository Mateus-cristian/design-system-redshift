import type { StoryObj, Meta } from "@storybook/react"
import { TextProps, Text } from '@redshift-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: (
            <>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta sed dignissimos ea eaque expedita harum voluptate magni.Dicta expedita quam beatae maxime eum qui consequatur tempora eius voluptates optio.Tempora!
            </>
        )
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: ' opa opa opa',
        as: 'strong'
    }
}

