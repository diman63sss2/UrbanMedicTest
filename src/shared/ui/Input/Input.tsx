import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  autofocus?: boolean;
  id?: string;
  readonly?: boolean;
  title?: string;
  error?: string | null;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        id,
        readonly,
        title,
        error,
        ...otherProps
    } = props;

    const [isActive, setIsActive] = useState<boolean>(false);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onFocusHandler = () => {
        setIsActive(true);
    };

    const onBlurHandler = () => {
        setIsActive(false);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.active]: isActive || !!value,
        [cls.error]: error !== null,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {title
        && (
            <label htmlFor={id} className={cls.placeholder}>
                {title}
            </label>
        )}
            <input
                ref={ref}
                className={cls.input}
                id={id}
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
