import { ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
import { ComponentProps } from '@stitches/react'

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
    ({ prefix, ...props }: TextInputProps, ref: any) => {
        return (
            <TextInputContainer>
                {!!prefix && <Prefix>{prefix}</Prefix>}
                <Input ref={ref} {...props} />
            </TextInputContainer>
        )
    },
)

TextInput.displayName = 'TextInput'