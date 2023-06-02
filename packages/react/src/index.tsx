import { colors } from '@redshift-ui/tokens'
import { styled } from './styles'

const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$redshift500',
    borderRadius: '$md',
    height: '$10'
})

export function App() {
    return (
        <Button>Hello design system</Button>
    )
}