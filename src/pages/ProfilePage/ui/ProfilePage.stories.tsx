import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
    },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />

export const Light = Template.bind({})
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Test',
                lastname: 'Testovich',
                age: 20,
                country: Country.Belarus,
                city: 'Gomel',
                username: 'test',
                currency: Currency.USD,
            },
        },
    }),
]

export const Dark = Template.bind({})
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: 'Test',
                lastname: 'Testovich',
                age: 20,
                country: Country.Belarus,
                city: 'Gomel',
                username: 'test',
                currency: Currency.USD,
            },
        },
    }),
]
