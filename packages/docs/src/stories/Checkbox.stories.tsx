import type { StoryObj, Meta } from "@storybook/react"
import { CheckboxProps, Checkbox, Text, Box } from '@redshift-ui/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '$2' }}>
                    {Story()}
                    <Text size="sm">Accept terms of use</Text>
                </Box>
            )
        }

    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

