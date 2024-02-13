import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserItems } from 'entities/user/model/selectors/userSelectors';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { ChangeUserModal } from 'entities/user/ui/ChangeUserModal/ChangeUserModal';
import { Gender, UserItem } from 'entities/user/model/types/user';
import cls from './UsersList.module.scss';

interface UsersListProps {
  className?: string;
}

export const UsersList = ({ className }: UsersListProps) => {
    const [userItem, setUserItem] = useState<UserItem>({
        name: {
            first: '',
            last: '',
        },
        email: '',
        gender: 'male',
        id: 0,
    });

    const [isChangeItemModal, setChangeItemModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setChangeItemModal(false);
    }, []);

    const onShowModal = useCallback((item: UserItem) => {
        setChangeItemModal(true);
        setUserItem(item);
    }, []);

    const usersItems = useSelector(getUserItems);

    return (
        <div className={classNames(cls.list, {}, [className])}>
            <div className={cls.row}>
                <div className={cls.cell}>
                    №
                </div>
                <div className={cls.cell}>
                    Фамилия
                </div>
                <div className={cls.cell}>
                    Имя
                </div>
                <div className={cls.cell}>
                    Пол
                </div>
                <div className={cls.cell}>
                    Почта
                </div>
                <div className={cls.cell}>
                    Действия
                </div>
            </div>
            {usersItems.map((item, id) => (
                <div key={id} className={cls.row}>
                    <div className={cls.cell}>
                        {id + 1}
                    </div>
                    <div className={cls.cell}>
                        {item.name.last}
                    </div>
                    <div className={cls.cell}>
                        {item.name.first}
                    </div>
                    <div className={cls.cell}>
                        {item.gender}
                    </div>
                    <div className={cls.cell}>
                        {item.email}
                    </div>
                    <div className={cls.cell}>
                        <Button onClick={() => onShowModal(item)} className={cls.button} theme={ThemeButton.BASE}>
                            Действия
                        </Button>
                    </div>
                </div>
            ))}
            {isChangeItemModal && (
                <ChangeUserModal
                    userItem={userItem}
                    isOpen={isChangeItemModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
};
