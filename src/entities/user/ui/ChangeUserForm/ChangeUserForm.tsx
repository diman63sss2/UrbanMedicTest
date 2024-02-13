import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { UserForm, UserFormSuccess, UserFormType } from 'entities/user/ui/UserForm/ui/UserForm';
import { addUserItem } from 'entities/user/model/actions/addUserItem';
import { UserItem } from 'entities/user/model/types/user';
import cls from './ChangeUserForm.module.scss';

interface ChangeUserFormProps {
  className?: string;
  userItem: UserItem;
}

export const ChangeUserForm = (props: ChangeUserFormProps) => {
    const {
        className,
        userItem,
    } = props;
    const dispatch = useDispatch();

    const onSuccess = (result: UserFormSuccess) => {
        // Сдесь изменение добавить
        dispatch(addUserItem(result.userItem));
    };
    return (
        <div className={classNames(cls.AddUserForm, {}, [className])}>
            <UserForm
                userItem={userItem}
                onSuccess={onSuccess}
                type={UserFormType.CHANGE}
                title="Редактировать пользователя"
            />
        </div>
    );
};
