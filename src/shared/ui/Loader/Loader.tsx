import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string
}
/* eslint-disable */
export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
