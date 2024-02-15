import { classNames } from 'shared/lib/classNames/classNames';
import { UserForm, UserFormSuccess, UserFormType } from 'entities/user/ui/UserForm/ui/UserForm';
import { useDispatch } from 'react-redux';
import { addUserItem } from 'entities/user/model/actions/addUserItem';
import cls from './AddUserForm.module.scss';

interface AddUserFormProps {
  className?: string;
  onClose: () => void;
}

export const AddUserForm = ({ className, onClose }: AddUserFormProps) => {
    const dispatch = useDispatch();

    const onSuccess = (result: UserFormSuccess) => {
        dispatch(addUserItem(result.userItem));
        onClose();
    };
    return (
        <div className={classNames(cls.AddUserForm, {}, [className])}>
            <UserForm onSuccess={onSuccess} type={UserFormType.ADD} title="Новый пользователь" />
        </div>
    );
};
