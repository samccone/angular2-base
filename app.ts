/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

class Store {
  todos: Array<{title: String, active: Boolean}>;
  constructor() {
    this.todos = [{title: 'wow', active: false}, {title: 'such', active: false}, {title: 'list', active: false}];
  }
  remove(todo: {title: String, active: Boolean}) {
    for (let todo of this.todos) {
      if (todo.title === todo.title) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        break;
      }
    }
  }
}

@Component({
  selector: 'sample-app',
  injectables: [
    Store
  ]
})
@View({
  directives: [For, If],
  template: `
        <p *if="store.todos.length"> {{store.todos.length}} items </p>
        <ul class="todo-list">
          <li *for="#todo of store.todos" [class.active]="todo.active">
            <p *if="!todo.active" (click)="activate(todo)"> {{todo.title}}</p>
            <input [value]="todo.title" *if="todo.active" #t (keyup.enter)="deactivate(t, todo)">
          </li>
        </ul>`
})
class SampleApp{
  store: Store;
  constructor() {
    this.store = new Store();
  }
  activate(todo: {title: String, active: Boolean}) {
    todo.active = true;
  }
  deactivate(element, todo: {title: String, active: Boolean}) {
    store.remove(todo);
  }
  remove(todo: {title: String, active: Boolean}) {
    todo.active = !todo.active;
    return this.store.remove(todo);
  }
}

bootstrap(SampleApp);
