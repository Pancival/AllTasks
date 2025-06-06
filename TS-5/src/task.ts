// 1 задание
interface Car {
  model: string;
  price: number;
  dynamic_1: Record<string, string>;
  dynamic_2: { [key: string]: number };
  tuple: [string, number, string];
}

const car: Car = {
  model: "BMW",
  price: 1000,
  dynamic_1: {
    "100": "fast",
  },
  dynamic_2: {
    "100": 100,
  },
  tuple: ["101", 102, "103"],
};

type CarType = keyof typeof car;

// 2 задание
function add(a: string, b: string): string;
function add(a: number, b: number): string;
function add(a: string, b: number): string;

function add(a: string | number, b: string | number): string {
  if (typeof a === "number" && typeof b === "number") {
    return String(a + b);
  }
  return `${a} + ${b}`;
}

const res = add("123", 12);

// 3 задание
type PartialCar = Partial<Car>;
type RequiredCar = Required<Car>;
type ReadonlyCar = Readonly<Car>;
type PickCar = Pick<Car, "price" | "model">;
type OmitCar = Omit<Car, "model">;
type ExtractedCar = Extract<Car, "model" | "age">;
type ExcludedCar = Exclude<Car, "model" | "age">;
