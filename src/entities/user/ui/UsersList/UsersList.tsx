import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserItems } from 'entities/user/model/selectors/userSelectors';
import cls from './UsersList.module.scss';

interface UsersListProps {
  className?: string;
}

export const UsersList = ({ className }: UsersListProps) => {
    const a = 1;
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
                <div className={cls.item}>
                    a
                </div>
            ))}
        </div>
    );
};
