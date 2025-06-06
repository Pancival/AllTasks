import { Container, getValue } from './container';
import { HanoiTowers } from './hanoi';

// первое задание
const hanoi = new HanoiTowers(3);
hanoi.solveHanoi();

// второе задание
const containerNumber: Container<number> = { value: 52 };
const containerString: Container<string> = { value: 'value' };

const containerValueNumber: number = getValue<number>(containerNumber);
const containerValueString: string = getValue<string>(containerString);

console.log(containerValueNumber, containerValueString);
