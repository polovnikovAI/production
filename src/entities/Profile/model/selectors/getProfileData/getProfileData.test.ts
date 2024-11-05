import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileData.ts', () => {
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
                data: data,
            },
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
