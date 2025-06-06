class Stack<T> {
    private items: T[] = [];
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    size(): number {
      return this.items.length;
    }
  }
  
  class Circle {
    size: number;
    numberOfStick: number;
  
    constructor(size: number, numberOfStick: number) {
      this.size = size;
      this.numberOfStick = numberOfStick;
    }
  }
  
  export class HanoiTowers {
    private towers: Stack<Circle>[] = Array.from({ length: 3 }, () => new Stack<Circle>());
  
    constructor(diskCount: number) {
      for (let i = diskCount - 1; i >= 0; i--) {
        this.towers[0].push(new Circle(i, 0));
      }
    }
  
    moveDisks(size: number, from: number, to: number, temp: number): void {
      if (size > 0) {
        this.moveDisks(size - 1, from, temp, to);
  
        const disk = this.towers[from].pop();
        if (disk) {
          disk.numberOfStick = to;
          this.towers[to].push(disk);
          console.log(`Перемещение диска ${disk.size} с ${from} на ${to}`);
        }

        this.moveDisks(size - 1, temp, to, from);
      }
    }
  
    solveHanoi(): void {
      const size = this.towers[0].size();
      this.moveDisks(size, 0, 2, 1);
    }
  
    printTowers(): void {
      console.log(this.towers);
    }
  }