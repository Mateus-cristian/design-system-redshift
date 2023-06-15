import type { StoryObj, Meta } from "@storybook/react"
import { TextProps, Text } from '@redshiftui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        size: 'md',
        children:

            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta sed dignissimos ea eaque expedita harum voluptate magni.Dicta expedita quam beatae maxime eum qui consequatur tempora eius voluptates optio.Tempora!'


    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: ' opa opa opa',
        as: 'strong'
    }
}

