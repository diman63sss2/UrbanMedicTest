import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { UserItem } from 'entities/user/model/types/user';

import cls from './UserListItem.module.scss';

interface UserListItemProps {
  className?: string;
  id: number;
  item: UserItem;
  onShowModal: (item: UserItem) => void;
}

export const UserListItem = (props: UserListItemProps) => {
    const {
        className,
        item,
        onShowModal,
        id,
    } = props;

    return (
        <div className={cls.row}>
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
                    <div className={cls.button_text}>
                        Действия
                    </div>
                </Button>
            </div>
        </div>
    );
};
