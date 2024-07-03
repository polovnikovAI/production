import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { withTranslation } from 'react-i18next'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
    test('render test', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
