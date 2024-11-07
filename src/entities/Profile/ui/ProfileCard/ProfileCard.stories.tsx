import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
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
        avatar: 'https://i.pinimg.com/originals/d7/00/a2/d700a2efa7a97f6fd685b08a45b30a33.png',
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
