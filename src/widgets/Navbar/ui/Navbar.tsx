import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import useWindowSize from 'shared/lib/hooks/useWindowSize/useWindowSize';
import { useDispatch, useSelector } from 'react-redux';
import { getSeed } from 'features/AuthBySeed/model/selectors/authBySeedSelectors';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { userLogout } from 'entities/user/model/actions/userLogout';
import { AddUserModal } from 'entities/user/ui/AddUserModal/AddUserModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const windowSize = useWindowSize();
    const seed = useSelector(getSeed);
    const dispatch = useDispatch();
    const [isAddItemModal, setAddItemModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setAddItemModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setAddItemModal(true);
    }, []);

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
                <Button onClick={onShowModal} className={cls.button_add} theme={ThemeButton.BASE}>
                    Добавить пользователя
                </Button>
                <Button onClick={onLogout} className={cls.button_logout} theme={ThemeButton.BASE}>
                    <div className={cls.button_logout_text}>
                        Выйти
                    </div>
                </Button>
            </div>
            { isAddItemModal && (
                <AddUserModal
                    isOpen={isAddItemModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
