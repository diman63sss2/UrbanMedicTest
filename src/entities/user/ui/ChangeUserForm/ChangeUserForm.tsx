import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { UserForm, UserFormSuccess, UserFormType } from 'entities/user/ui/UserForm/ui/UserForm';
import { addUserItem } from 'entities/user/model/actions/addUserItem';
import { UserItem } from 'entities/user/model/types/user';
import { deleteUserItem } from 'entities/user/model/actions/deleteUserItem';
import { changeUserItem } from 'entities/user/model/actions/changeUserItem';
import cls from './ChangeUserForm.module.scss';

interface ChangeUserFormProps {
  className?: string;
  userItem: UserItem;
  onClose: () => void;
}

export const ChangeUserForm = (props: ChangeUserFormProps) => {
    const {
        className,
        userItem,
        onClose,
    } = props;
    const dispatch = useDispatch();

    const onSuccess = (result: UserFormSuccess) => {
        if (result.type === UserFormType.CHANGE) {
            dispatch(changeUserItem(result.userItem));
            onClose();
        }
        if (result.type === UserFormType.DELETE) {
            dispatch(deleteUserItem(result.userItem));
            onClose();
        }
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
