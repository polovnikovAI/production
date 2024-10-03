import { FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, itaque ratione
                exercitationem, qui officiis aperiam iste dolor maiores, illum tempora fugit dolores
                debitis dolorem culpa? Consequatur, velit odit. Cum, tenetur?
            </Modal>
        </div>
    )
}
