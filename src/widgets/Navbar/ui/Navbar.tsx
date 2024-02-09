import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import useWindowSize from 'shared/lib/hooks/useWindowSize/useWindowSize';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const windowSize = useWindowSize();

    return (
        <header
            data-testid="navbar"
            className={classNames(cls.Navbar, {}, [className, windowSize.width < 1024 ? cls.mobile : ''])}
        >
            <div />
        </header>
    );
});
