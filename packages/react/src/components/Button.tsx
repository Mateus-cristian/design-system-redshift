import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
import { colors } from '@redshift-ui/tokens'

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    transition: .5,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    padding: '0 $4',

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4'
    },

    '&:disabled': {
        color: '$white',
        borderColor: '$gray200',
        backgroundColor: '$gray400',
        cursor: 'not-allowed'
    },

    variants: {
        variant: {
            primary: {
                color: '$white',
                backgroundColor: '$redshift500',

                '&:not(:disabled):hover': {
                    backgroundColor: '$redshift300'
                }
            },

            secondary: {
                color: '$redshift300',
                border: '2px solid $redshift500',

                '&:not(:disabled):hover': {
                    backgroundColor: '$redshift500',
                    color: '$white',
                },

                '&:disabled': {
                    color: '$gray200',
                    borderColor: '$gray200'
                }
            },

            tertiary: {
                color: '$gray100',

                '&:not(:disabled):hover': {
                    color: '$white',
                },

                '&:disabled': {
                    color: '$gray600',
                    borderColor: '$gray200'
                }
            }
        },

        size: {
            sm: {
                height: 38
            },

            md: {
                height: 46
            }
        }

    },

    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }

})

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}