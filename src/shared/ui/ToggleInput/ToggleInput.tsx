import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import cls from './ToggleInput.module.scss';

interface ToggleInputProps<T> {
  className?: string;
  idPrefix: string;
  onChange: (value: T) => void;
  values: [T, T],
  value: T,
  name: string,
}

export const ToggleInput = <T extends string>(props: ToggleInputProps<T>) => {
    const {
        className,
        onChange,
        idPrefix,
        values,
        value,
        name,
    } = props;
    const [selectedInput, setSelectedInput] = useState<T>(value);

    const generateId = (name: T) => `${idPrefix}-${name}`;

    const handleToggle = (gender: T) => {
        setSelectedInput(gender);
        onChange(gender);
    };

    return (
        <div className={classNames(cls.ToggleInput, {}, [className])}>
            <label
                className={
                    classNames(cls.button, { [cls.active]: selectedInput === values[0] })
                }
                htmlFor={generateId(values[0])}
            >
                <input
                    id={generateId(values[0])}
                    type="radio"
                    name={name}
                    value={values[0]}
                    checked={selectedInput === values[0]}
                    onChange={() => handleToggle(values[0])}
                />
                Male
            </label>
            <label
                className={
                    classNames(cls.button, { [cls.active]: selectedInput === values[1] })
                }
                htmlFor={generateId(values[1])}
            >
                <input
                    id={generateId(values[1])}
                    type="radio"
                    name={name}
                    value={values[1]}
                    checked={selectedInput === values[1]}
                    onChange={() => handleToggle(values[1])}
                />
                Female
            </label>
        </div>
    );
};
