import { Counter } from 'entities/Counter'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Page } from 'widgets/Page/Page'

const MainPage = () => {
    const { t } = useTranslation('main')
    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }

    return <div>{t('Главная страница')}</div>
}

export default MainPage
