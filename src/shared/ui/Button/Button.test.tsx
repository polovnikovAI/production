import { render, screen } from '@testing-library/react'
import React from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('Button', () => {
    test('render test', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('render test with class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
