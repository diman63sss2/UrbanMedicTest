import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user/model/selectors/userSelectors';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const authData = useSelector(getUserAuthData);

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {authData.seed === '' && <Navigate to="/login" />}
            {authData.seed !== '' && <Navigate to="/" />}
        </Page>
    );
};

export default NotFoundPage;
