import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Task} from "./task";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {id: 1, name: 'First'},
      {id: 2, name: 'Second'},
      {id: 3, name: 'Third'},
    ];
    return {tasks};
  }
}
