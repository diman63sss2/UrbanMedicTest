export const validateName = (value: string): string | null => {
    const regex = /^[a-zA-Zа-яА-Я-]{1,25}$/;
    return regex.test(value) ? null
        : 'Имя и фамилия могут содержать только русские и английские буквы, а также дефис, длина не более 25 символов.';
};

export const validateEmail = (value: string): string | null => {
    const emailRegex = /^[^\s@]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return emailRegex.test(value) ? null : 'Неверный формат email.';
};
