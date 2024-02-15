import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Icon from 'shared/assets/icons/delete.svg';
import { GenderToggleInput } from 'entities/user/ui/GenderToggleInput/GenderToggleInput';
import { Gender, UserItem } from 'entities/user/model/types/user';
import { validateEmail, validateName } from 'entities/user/utils/formValidation';
import cls from './UserForm.module.scss';

export enum UserFormType {
  ADD = 'add',
  CHANGE = 'change',
  DELETE = '',
}

export type UserFormSuccess = {
  userItem: UserItem;
  type: UserFormType;
}

interface UserFormProps {
  className?: string;
  type: UserFormType;
  title: string;
  onSuccess: (result: UserFormSuccess) => void;
  userItem?: UserItem;
}

export const UserForm = (props: UserFormProps) => {
    const {
        className,
        type,
        title,
        onSuccess,
        userItem,
    } = props;

    const [formErrors, setFormErrors] = useState<string | null>(null);
    const [name, setName] = useState<string>((UserFormType.CHANGE === type && userItem) ? userItem.name.first : '');
    const [secondName, setSecondName] = useState<string>(
        (UserFormType.CHANGE === type && userItem)
            ? userItem.name.last
            : '',
    );
    const [email, setEmail] = useState<string>((UserFormType.CHANGE === type && userItem) ? userItem.email : '');
    const [selectedGender, setSelectedGender] = useState<Gender>(
        (UserFormType.CHANGE === type && userItem)
            ? userItem.gender
            : 'male',
    );

    const handleGenderChange = (gender: Gender) => {
        setSelectedGender(gender);
    };

    const handleNameChange = (value: string) => {
        setName(value);
    };

    const handleSecondChange = (value: string) => {
        setSecondName(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const nameValidation = validateName(name);
        const secondNameValidation = validateName(secondName);
        const emailValidation = validateEmail(email);

        if (!nameValidation && !secondNameValidation && !emailValidation) {
            setFormErrors(null);
            onSuccess(
                {
                    userItem: {
                        name: {
                            first: name,
                            last: secondName,
                        },
                        gender: selectedGender,
                        email,
                        id: userItem !== undefined ? userItem.id : 0,
                    },
                    type: UserFormType.CHANGE,
                },
            );
        } else {
            setFormErrors('*Некоторые поля заполнены не корректно');
        }
    };

    const deleteSubmit = () => {
        const nameValidation = validateName(name);
        const secondNameValidation = validateName(secondName);
        const emailValidation = validateEmail(email);

        if (!nameValidation && !secondNameValidation && !emailValidation) {
            setFormErrors(null);
            onSuccess(
                {
                    userItem: {
                        name: {
                            first: name,
                            last: secondName,
                        },
                        gender: selectedGender,
                        email,
                        id: userItem !== undefined ? userItem.id : 0,
                    },
                    type: UserFormType.DELETE,
                },
            );
        } else {
            setFormErrors('*Некоторые поля заполнены не корректно');
        }
    };

    return (
        <form className={classNames(cls.UserForm, {}, [className])} onSubmit={handleSubmit}>
            <span className={cls.title}>
                {title}
            </span>
            <GenderToggleInput
                className={cls.gender}
                value={selectedGender}
                onChange={handleGenderChange}
            />
            <div className={cls.inputs}>
                <div>
                    <Input
                        error={formErrors}
                        title="Фамилия*"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className={cls.input}
                    />
                    <Input
                        error={formErrors}
                        title="Имя*"
                        type="text"
                        value={secondName}
                        onChange={handleSecondChange}
                        className={cls.input}
                    />
                    <Input
                        error={formErrors}
                        title="Email*"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        className={cls.input}
                    />
                </div>
                {
                    formErrors && (
                        <div className={cls.error}>
                            {formErrors}
                        </div>
                    )
                }
            </div>

            <div className={cls.button_wrapper}>
                {
                    type === UserFormType.CHANGE
                  && (
                      <Button onClick={deleteSubmit} className={cls.button_delete}>
                          <Icon />
                      </Button>
                  )
                }
                <Button type="submit" className={cls.button} theme={ThemeButton.BASE}>
                    Сохранить
                </Button>
            </div>
        </form>
    );
};
