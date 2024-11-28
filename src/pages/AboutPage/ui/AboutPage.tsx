import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const AboutPage = () => {
    const { t } = useTranslation('about')

    return <div>{t('О сайте')}</div>
}

export default AboutPage
