import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, itaque ratione exercitationem, qui officiis aperiam iste dolor maiores, illum tempora fugit dolores debitis dolorem culpa? Consequatur, velit odit. Cum, tenetur?',
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, itaque ratione exercitationem, qui officiis aperiam iste dolor maiores, illum tempora fugit dolores debitis dolorem culpa? Consequatur, velit odit. Cum, tenetur?',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
