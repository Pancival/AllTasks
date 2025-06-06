import { errors } from '../utils/dictionarty';

export function validateCityName(cityName: string): {
  isValid: boolean;
  message: string;
} {
  if (!cityName || typeof cityName !== 'string') {
    return {
      isValid: false,
      message: errors.city.required,
    };
  }

  if (cityName.length === 0) {
    return {
      isValid: false,
      message: errors.city.empty,
    };
  }

  const escapeCharsPattern = /[<>&"]/;
  if (escapeCharsPattern.test(cityName)) {
    return {
      isValid: false,
      message: errors.city.escape,
    };
  }

  const validCharsPattern = /^[a-zA-Z\s\-!À-ž]+$/;
  if (!validCharsPattern.test(cityName)) {
    return {
      isValid: false,
      message: errors.city.invalid,
    };
  }

  return {
    isValid: true,
    message: errors.city.valid,
  };
}
