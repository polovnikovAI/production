import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/tests/storybook.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        first: 'Test',
        lastname: 'Testovich',
        age: 20,
        country: Country.Belarus,
        city: 'Gomel',
        username: 'test',
        currency: Currency.USD,
        avatar: avatar,
    },
}
Primary.decorators = []

export const withError = Template.bind({})
withError.args = {
    error: 'true',
}
withError.decorators = []

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}
Loading.decorators = []
