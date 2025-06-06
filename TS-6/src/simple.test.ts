import { validateCityName } from './validate/validateCity';
import { validateDate } from './validate/validateDate';
import { errors } from './utils/dictionarty';

describe('Валидация города', () => {
  it('Проверка названия города на экранирование', () => {
    const result = validateCityName('Moscow <div>');
    expect(result.message).toBe(errors.city.escape);
  });
  it('Проверка на пропуск с восклицательными знаками или дефисами', () => {
    const result1 = validateCityName('Moskow!');
    const result2 = validateCityName('-Moscow');
    expect(result1.isValid).toBeTruthy();
    expect(result2.isValid).toBeTruthy();
  });
  it('Пропуск названия города со спецсимволами', () => {
    const result = validateCityName('Ağrı');
    expect(result.isValid).toBeTruthy();
  });
  it('Пропуск названия из одной буквы', () => {
    const result = validateCityName('a');
    expect(result.isValid).toBeTruthy();
  });
});

describe('Валидация даты', () => {
  it('Пропуск даты в виде ДД.ММ.ГГГГ', () => {
    const result = validateDate('11.11.2222');
    expect(result.isValid).toBeTruthy();
  });
  it('Не пропускает спецсимволы', () => {
    const result = validateDate('11.11.2222&');
    expect(result.isValid).toBeFalsy();
  });
  it('Не пропускает буквенные значения', () => {
    const result = validateDate('11.11.2222f');
    expect(result.isValid).toBeFalsy();
  });
  it('Не пропускает, если дата раньше текущей', () => {
    const result = validateDate('11.11.2000');
    expect(result.message).toBe(errors.date.past);
  });
});
