import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileForm.ts', () => {
    test('should return data', () => {
        const data = {
            first: 'Test',
            lastname: 'Testovich',
            age: 20,
            country: Country.Belarus,
            city: 'Gomel',
            username: 'test',
            currency: Currency.USD,
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
