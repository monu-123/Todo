// Component to show current todos
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from "../todo";
@Component({
  selector: 'app-current-todo',
  templateUrl: './current-todo.component.html',
  styleUrls: ['./current-todo.component.css']
})

export class CurrentTodoComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTodo();
  }
  // list to store todos
  todos:Todo[]=[];
  getTodo(){
    return this.http.get('/api/getData').subscribe((response)=>{
      // create Todo object and store in list
      for( var i in response){
          this.todos.push(new Todo(response[i].data.title,response[i].data.description,response[i].data.timeStamp))
      }
    },(error) => {
      console.log('Error is: ',error);
    });
  }
}
