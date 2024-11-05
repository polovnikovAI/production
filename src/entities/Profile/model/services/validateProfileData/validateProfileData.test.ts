import { validateProfileData } from './validateProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/profile'

const data = {
    first: 'Test',
    lastname: 'Testovich',
    age: 20,
    country: Country.Belarus,
    city: 'Gomel',
    username: 'test',
    currency: Currency.USD,
}

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('incorrect age 1', async () => {
        const result = validateProfileData({ ...data, age: 100 })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('incorrect age 2', async () => {
        const result = validateProfileData({ ...data, age: 11 })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('incorrect age 3', async () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('incorrect age 4', async () => {
        const result = validateProfileData({ ...data, age: Number('twenty one') })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('correct city 1', async () => {
        const result = validateProfileData({ ...data, city: 'Екатеринбург' })

        expect(result).toEqual([])
    })

    test('correct city 2', async () => {
        const result = validateProfileData({ ...data, city: 'Москва' })

        expect(result).toEqual([])
    })

    test('incorrect city 1', async () => {
        const result = validateProfileData({ ...data, city: 'NY' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
    })

    test('incorrect city 2', async () => {
        const result = validateProfileData({ ...data, city: 'New-York' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
    })

    test('incorrect city 3', async () => {
        const result = validateProfileData({ ...data, city: 'Yekaterinburg-3' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
    })

    test('incorrect city 4', async () => {
        const result = validateProfileData({ ...data, city: 'Moscow2' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
    })
    test('incorrect city 5', async () => {
        const result = validateProfileData({ ...data, city: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
    })

    test('incorrect all', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
        ])
    })
})
