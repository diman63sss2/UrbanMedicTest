import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import useWindowSize from 'shared/lib/hooks/useWindowSize/useWindowSize';
import { useDispatch, useSelector } from 'react-redux';
import { getSeed } from 'features/AuthBySeed/model/selectors/authBySeedSelectors';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { userLogout } from 'entities/user/model/actions/userLogout';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const windowSize = useWindowSize();
    const seed = useSelector(getSeed);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userLogout());
    }, [dispatch]);

    return (
        <header
            data-testid="navbar"
            className={classNames(cls.Navbar, {}, [className, windowSize.width < 1024 ? cls.mobile : ''])}
        >
            <h1 className={cls.logo_seed}>{seed}</h1>
            <div className={cls.buttons}>
                <Button className={cls.button_add} theme={ThemeButton.BASE}>
                    Добавить пользователя
                </Button>
                <Button onClick={onLogout} className={cls.button_logout} theme={ThemeButton.BASE}>
                    Выйти
                </Button>
            </div>
        </header>
    );
});
