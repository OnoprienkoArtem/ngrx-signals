import { Injectable } from '@angular/core';
import { TODOS } from '../model/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  async getTodos() {
    await delay(2000);
    return TODOS;
  }
}

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
