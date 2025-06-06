import { errors } from '../utils/dictionarty';

export function validateDate(dateString: string): {
  isValid: boolean;
  message: string;
} {
  if (!dateString || typeof dateString !== 'string') {
    return {
      isValid: false,
      message: errors.date.required,
    };
  }

  // Проверка на соответствие шаблону даты (ДД.ММ.ГГГГ)
  const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!datePattern.test(dateString)) {
    return {
      isValid: false,
      message: errors.date.pattern,
      };
  }

  //проверка на запрещённые символы
  const invalidCharsPattern = /[a-zA-Z<>@!#$%^&*()_+={}[\]:;"'|\\?/~`]/;
  if (invalidCharsPattern.test(dateString)) {
    return {
      isValid: false,
      message: errors.date.invalidCharacters,
    };
  }

  // Преобразование строки в числа
  const [day, month, year] = dateString.split('.').map(Number);

  // Проверка существования такой даты
  const inputDate = new Date(year, month - 1, day);
  if (
    inputDate.getDate() !== day ||
    inputDate.getMonth() !== month - 1 ||
    inputDate.getFullYear() !== year
  ) {
    return {
      isValid: false,
      message: errors.date.invalid,
    };
  }

  // Проверка, что дата не в прошлом
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (inputDate < today) {
    return {
      isValid: false,
      message: errors.date.past,
    };
  }

  return {
    isValid: true,
    message: errors.date.valid,
  };
}
