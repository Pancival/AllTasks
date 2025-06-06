interface Person {
  id: number;
  userName: string;
  surname?: string;
  coins: number;
  readonly age: number;

  addCoin(amount: number): void;
  removeCoin(amount: number): void;
  getCoins(): string;
}

interface Person {
  // расширение интерфейса
  gender: string;
}

interface Student extends Person {
  university: string;
}

class StudentUnique implements Student {
  id: number;
  userName: string;
  surname: string;
  coins: number;
  age: number;
  university: string;
  gender: string;
  hasCertificates: boolean;

  constructor(
    id: number,
    userName: string,
    surname: string,
    coins: number,
    age: number,
    gender: string,
    university: string,
    hasCertificates: boolean
  ) {
    this.id = id;
    this.userName = userName;
    this.surname = surname;
    this.coins = coins;
    this.age = age;
    this.gender = gender;
    this.university = university;
    this.hasCertificates = hasCertificates;
  }

  addCoin(amount: number): void {
    this.coins += amount;
  }

  removeCoin(amount: number): void {
    this.coins -= amount;
  }

  getCoins(): string {
    return `Количество монет: ${this.coins}`;
  }
}

const ivan: Person = {
  id: 1,
  userName: "Ivan",
  surname: "Ivanov",
  coins: 5,
  age: 25,
  gender: "male",
  addCoin(amount: number): void {
    this.coins += amount;
  },
  removeCoin(amount: number): void {
    this.coins -= amount;
  },
  getCoins(): string {
    return `Количество монет ${this.coins}`;
  },
};
