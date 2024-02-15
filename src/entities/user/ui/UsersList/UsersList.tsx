import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserItems } from 'entities/user/model/selectors/userSelectors';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { ChangeUserModal } from 'entities/user/ui/ChangeUserModal/ChangeUserModal';
import { UserItem } from 'entities/user/model/types/user';
import useInfiniteScroll from 'entities/user/utils/useInfiniteScroll';
import { UserListItem } from 'entities/user/ui/UserListItem/UserListItem';
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
    const [visibleItems, setVisibleItems] = useState<number>(20);
    const [isChangeItemModal, setChangeItemModal] = useState<boolean>(false);
    const itemsPerPage = 20;

    const onCloseModal = useCallback(() => {
        setChangeItemModal(false);
    }, []);

    const onShowModal = useCallback((item: UserItem) => {
        setChangeItemModal(true);
        setUserItem(item);
    }, []);
    const usersItems = useSelector(getUserItems);

    const listRef = useInfiniteScroll(() => {
        if (usersItems.length > visibleItems) {
            setVisibleItems(visibleItems + itemsPerPage);
        }
    });

    return (
        <div className={classNames(cls.UserList, {}, [className])}>
            <div className={classNames(cls.row, {}, [cls.head])}>
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
            <div ref={listRef} className={cls.scrollList}>
                {usersItems.slice(0, visibleItems).map((item, id) => (
                    <UserListItem id={id} key={id} className={cls.row} item={item} onShowModal={onShowModal} />
                ))}
            </div>

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
