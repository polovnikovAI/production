import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>Страница статьи</div>
    )
}

export default memo(ArticlesPage)
