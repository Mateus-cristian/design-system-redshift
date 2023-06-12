import type { StoryObj, Meta } from "@storybook/react"
import { TextAreaProps, TextArea, Box, Text } from '@redshift-ui/react'

export default {
    title: 'Form/TextArea',
    component: TextArea,
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

} as Meta<TextAreaProps>


export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Add any observations'
    }
}


export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true
    }
}


