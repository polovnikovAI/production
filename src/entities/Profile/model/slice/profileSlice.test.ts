import { Country } from 'entities/Country'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { Currency } from 'entities/Currency'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const data = {
    first: 'Test',
    lastname: 'Testovich',
    age: 20,
    country: Country.Belarus,
    city: 'Gomel',
    username: 'test',
    currency: Currency.USD,
}

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        })
    })

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        })
    })

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { first: 'Alexey' } }
        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({ first: 'Ivan' })),
        ).toEqual({
            form: { first: 'Ivan' },
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        })
    })

    test('test update profile service fullfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        })
    })
})
