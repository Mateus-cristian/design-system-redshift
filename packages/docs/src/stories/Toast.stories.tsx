import type { StoryObj, Meta } from "@storybook/react"
import { ToastProps, Text, Toast } from '@redshiftui/react'

export default {
    title: 'Alert/Toast',
    component: Toast,
    args: {
        title: "Agendamento realizado",
        text: "Segunda-feira,19 de junho de 2023"
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {

}

