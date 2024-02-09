import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'features/AuthBySeed/model/selectors/authBySeedSelectors';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const isAuth = useSelector(getIsAuth);

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            Страница не найденна
            {!isAuth && <Navigate to="/login" />}
            {isAuth && <Navigate to="/" />}
        </Page>
    );
};

export default NotFoundPage;
