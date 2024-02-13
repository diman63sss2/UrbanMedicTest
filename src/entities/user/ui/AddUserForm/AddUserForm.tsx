import { classNames } from 'shared/lib/classNames/classNames';
import { UserForm, UserFormSuccess, UserFormType } from 'entities/user/ui/UserForm/ui/UserForm';
import { useDispatch } from 'react-redux';
import { addUserItem } from 'entities/user/model/actions/addUserItem';
import cls from './AddUserForm.module.scss';

interface AddUserFormProps {
  className?: string;
}

export const AddUserForm = ({ className }: AddUserFormProps) => {
    const dispatch = useDispatch();

    const onSuccess = (result: UserFormSuccess) => {
        dispatch(addUserItem(result.userItem));
    };
    return (
        <div className={classNames(cls.AddUserForm, {}, [className])}>
            <UserForm onSuccess={onSuccess} type={UserFormType.ADD} title="Новый пользователь" />
        </div>
    );
};
