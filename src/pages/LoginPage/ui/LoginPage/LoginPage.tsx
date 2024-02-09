import React, { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useDispatch } from 'react-redux';
import { LoginForm } from 'features/AuthBySeed/ui/LoginForm/LoginForm';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginPage.module.scss';

interface LoginPageProps {
  className?: string;
}

const LoginPage = ({ className }: LoginPageProps) => {
    const dispatch = useDispatch();

    return (
        <Page className={classNames(cls.LoginPage, {}, [className])}>
            <LoginForm />
        </Page>
    );
};

export default memo(LoginPage);
