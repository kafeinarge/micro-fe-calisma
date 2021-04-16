import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private http: HttpClient) {}

  public get() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
