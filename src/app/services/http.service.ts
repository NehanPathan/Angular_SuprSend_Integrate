import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/tasks';

  constructor() { }

  addTask(task: string) {
    return this.httpClient.post(this.baseUrl, {
      title: task,
      completed: false
    });
  }

  getAllTasks() {
    return this.httpClient.get(this.baseUrl);
  }

  updateTask(task: any) {
    return this.httpClient.put(`${this.baseUrl}/${task.id}`, task);
  }
}
