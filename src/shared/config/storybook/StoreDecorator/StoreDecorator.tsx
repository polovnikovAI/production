import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
}

/* eslint-disable react/display-name */
export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ) =>
        (StoryComponent: Story) => {
            return (
                <StoreProvider
                    initialState={state}
                    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
                >
                    <StoryComponent />
                </StoreProvider>
            )
        }
