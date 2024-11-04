import { Injectable } from '@angular/core';
import { TODOS } from '../model/mock-data';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  async getTodos() {
    await delay(2000);
    return TODOS;
  }

  async addTodo(todo: Partial<Todo>) {
    await delay(2000);
    return {
      id: Math.random().toString(36).substr(2, 9),
      ...todo,
    } as Todo;
  }

  async deleteTodo(id: string) {
    await delay(2000);
  }

  async updateTodo(id: string, completed: boolean) {
    await delay(2000);
  }
}

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
