import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Title Lorem ipsum dolor',
    text: 'description Description description Description',
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
    title: 'Title Lorem ipsum dolor',
}

export const onlyText = Template.bind({})
onlyText.args = {
    text: 'description Description description Description',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Title Lorem ipsum dolor',
    text: 'description Description description Description',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
    title: 'Title Lorem ipsum dolor',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
    text: 'description Description description Description',
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
    title: 'Title Lorem ipsum dolor',
    text: 'description Description description Description',
    theme: TextTheme.ERROR,
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
    title: 'Title Lorem ipsum dolor',
    text: 'description Description description Description',
    size: TextSize.L,
}
