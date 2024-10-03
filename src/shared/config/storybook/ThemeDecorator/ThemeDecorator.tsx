import { Story } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

/* eslint-disable react/display-name */
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
}
