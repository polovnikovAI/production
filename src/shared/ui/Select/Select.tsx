import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    readonly?: boolean
    onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const { className, label, onChange, options, value, readonly } = props

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option className={cls.option} value={opt.value} key={opt.value}>
                {opt.content}
            </option>
        ))
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    const mods: Mods = {}

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    )
})
