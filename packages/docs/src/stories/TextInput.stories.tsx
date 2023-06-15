import type { StoryObj, Meta } from "@storybook/react"
import { TextInputProps, TextInput, Box, Text } from '@redshiftui/react'

export default {
    title: 'Form/TextInput',
    component: TextInput,
    args: {

    },
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: "$2" }}>
                    <Text size='sm'>Your Name is here</Text>
                    {Story()}
                </Box>
            )
        }
    ]

} as Meta<TextInputProps>


export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'type your name'
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}


