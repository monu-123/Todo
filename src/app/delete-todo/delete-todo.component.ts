// component to delete Todo
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Todo } from "../todo";
@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {

  constructor(private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTodo();
  }
  todos:Todo[]=[];
  getTodo(){
    return this.http.get('/api/getData').subscribe((response)=>{
      for( var i in response){
          this.todos.push(new Todo(response[i].data.title,response[i].data.description,response[i].data.timeStamp))
      }
    },(error) => {
      console.log('Error is: ',error);
    });
  }

  // update todo
  updateTodo(title:string,description:string){
    var todo={
        "data":{
                  "title":title,
                  "description":description,
                  "timeStamp": Date.now().toString()
              }
            };
    this.sendData(todo);
  }
  // send updated todo
  sendData(todo){
    return this.http.post<any>('/api/postData',todo).subscribe((response)=>{
      this.router.navigate(['/']);
    },(error) => {
      console.log('Error is: ',error);
    });
  }

  // delete todo
  deleteTodo(title:string){
    var todoTitle={
      "title":title
    };
    return this.http.post('/api/deleteTodo',todoTitle).subscribe((response)=>{
      this.router.navigate(['/']);
    },(error) => {
      console.log('Error is:', error);
    })
  }
}
