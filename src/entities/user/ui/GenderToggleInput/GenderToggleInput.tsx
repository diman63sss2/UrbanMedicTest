import { classNames } from 'shared/lib/classNames/classNames';
import { ToggleInput } from 'shared/ui/ToggleInput/ToggleInput';
import { Gender } from 'entities/user/model/types/user';
import cls from './GenderToggleInput.module.scss';

interface GenderToggleInputProps {
  className?: string;
  onChange: (gender: Gender) => void;
  value: Gender;
}

export const GenderToggleInput = (props: GenderToggleInputProps) => {
    const {
        className,
        onChange,
        value,
    } = props;
    return (

        <ToggleInput
            value={value}
            onChange={onChange}
            idPrefix="addForm"
            name="gender"
            values={['male', 'female']}
        />

    );
};
