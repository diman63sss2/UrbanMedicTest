import { Modal } from 'shared/ui/Modal/Modal';
import { ChangeUserForm } from 'entities/user/ui/ChangeUserForm/ChangeUserForm';
import { UserItem } from 'entities/user/model/types/user';

interface ChangeUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  userItem: UserItem;
}

export const ChangeUserModal = ({ isOpen, onClose, userItem }: ChangeUserModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <ChangeUserForm onClose={onClose} userItem={userItem} />
    </Modal>
);
