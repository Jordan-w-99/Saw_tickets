import React, { CSSProperties, type MouseEvent } from 'react'
import { Theme } from '../Theme'

export interface ButtonProps {
    text?: string
    primary?: boolean
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    style?: CSSProperties
}

export const Button = ({
    text,
    primary = false,
    onClick,
    style
}: ButtonProps): React.JSX.Element => {
    return (
        <button
            onClick={onClick}
            style={{
                fontSize: 15,
                fontWeight: 500,
                border: 'none',
                padding: '5px 15px',
                backgroundColor: primary ? Theme.PrimaryCol : 'white',
                color: primary ? 'white' : 'black',
                borderRadius: 3,
                ...style
            }}
        >
            {text}
        </button>
    )
}