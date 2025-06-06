import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
import { Priority, Status, User } from './types.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);


const user: User = {
  name: '',
  status: Status.ACTIVE,
  todos: [],

  changeStatus(newStatus: Status) {
    this.status = newStatus;
    console.log(`User status changed to ${newStatus}`);
  },

  addTodo(todo: string, priority: Priority = Priority.MEDIUM) {
    this.todos.push({ todo, priority });
    console.log(`Todo added: ${todo} (Priority: ${priority})`);
  },

  displayTodos() {
    console.log(`Todos for ${this.name}:`);
    this.todos.forEach((todo) => console.log(`${todo.todo} (Priority: ${todo.priority})`));
  },

  displayActiveTodos() {
    console.log(`Active Todos for ${this.name}:`);
    this.todos
      .filter((todo) => todo.priority !== Priority.HIGH)
      .forEach((todo) => console.log(`${todo.todo} (Priority: ${todo.priority})`));
  },
};

user.name = 'John';
user.changeStatus(Status.ACTIVE);
user.addTodo('take delivery', Priority.HIGH);
user.addTodo('stocktaking', Priority.HIGH);
user.addTodo('collect the order');
user.addTodo('throw out the trash', Priority.LOW);
user.displayTodos();
user.displayActiveTodos();
user.changeStatus(Status.INACTIVE);
