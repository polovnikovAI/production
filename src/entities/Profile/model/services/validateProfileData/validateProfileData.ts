import { Profile, ValidateProfileError } from '../../types/profile'

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }

    const { first, lastname, age, city } = profile

    const errors: ValidateProfileError[] = []

    const regCity = /^[a-zA-Zа-яА-ЯёЁ]{3,20}$/g

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age) || age < 12 || age > 99) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY)
    }

    if (!regCity.test(city as string)) {
        errors.push(ValidateProfileError.INCORRECT_CITY)
    }

    return errors
}
