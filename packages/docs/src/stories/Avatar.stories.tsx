import type { StoryObj, Meta } from "@storybook/react"
import { AvatarProps, Avatar } from '@redshift-ui/react'

export default {
    title: 'Avatar/Avatar',
    component: Avatar,
    args: {
        src: 'https://avatars.githubusercontent.com/u/77680225?v=4',
        alt: 'Mateus Cristian'
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}

