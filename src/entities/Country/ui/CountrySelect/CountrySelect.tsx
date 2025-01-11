import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../../model/types/country'
import { memo, useCallback } from 'react'
import { ListBox } from 'shared/ui/ListBox/ListBox'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props

    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange],
    )

    return (
        <ListBox
            className={className}
            items={options}
            value={value}
            defaultValue={t('Страна')}
            onChange={onChangeHandler}
            readonly={readonly}
            direction='top'
            label={t('Укажите страну')}
        />
    )
})
