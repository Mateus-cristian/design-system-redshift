import type { StoryObj, Meta } from "@storybook/react"
import { HeadingProps, Heading } from '@redshift-ui/react'

export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: (
            <>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta sed dignissimos ea eaque expedita harum voluptate magni.Dicta expedita quam beatae maxime eum qui consequatur tempora eius voluptates optio.Tempora!
            </>
        )
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'teste de heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading sempre será um h2, mas podemos alterar isso com a propriedade as'
            }
        }
    }
}

