import { updateProfileData } from './updateProfileData'
import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { ValidateProfileError } from '../../types/profile'

const data = {
    first: 'Test',
    lastname: 'Testovich',
    age: 20,
    country: Country.Belarus,
    city: 'Gomel',
    username: 'test',
    currency: Currency.USD,
    id: '1',
}

describe('updateProfileData.test', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })

        thunk.api.put.mockReturnValue(Promise.resolve({ data: data }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        })
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
})
