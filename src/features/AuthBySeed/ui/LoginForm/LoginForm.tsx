import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import {
    ChangeEvent, FormEvent, useCallback, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginBySeed } from 'features/AuthBySeed/model/actions/LoginBySeed';
import { getLoginError, getLoginIsLoading } from 'features/AuthBySeed/model/selectors/authBySeedSelectors';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const [seed, setSeed] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const loginError = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    // const isLoading = useSelector(getLoginIsLoading);

    const handleSeedChange = (value: string) => {
        setSeed(value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!seed.trim()) {
            setError('*Поле заполнено не корректно');
            return;
        }
        dispatch(loginBySeed({ seed }, () => {

        }));
        setError(null);
    };

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.LoginForm, {}, [className])}>
            <h1 className={cls.title}>Добро пожаловать</h1>
            <Input
                title="Seed"
                placeholder="Admin"
                id="login"
                type="text"
                value={seed}
                onChange={handleSeedChange}
            />
            {error && <span className={cls.error}>{error}</span>}
            <Button disabled={isLoading} type="submit" className={cls.button} theme={ThemeButton.BASE}>
                Войти
            </Button>
        </form>
    );
};
