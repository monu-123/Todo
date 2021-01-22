// component to create todo
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Todo } from "../todo";
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private http : HttpClient, private router: Router) { }
  ngOnInit(): void {
  }
  addTodo(form:NgForm){
    var todo={
        "data":{
                  "title":form['title'],
                  "description":form['description'],
                  "timeStamp": Date.now().toString()
              }
            };
    this.sendData(todo);
  }
  //send data to nodejs api
  sendData(todo){
    return this.http.post<any>('/api/postData',todo).subscribe((response)=>{
      this.router.navigate(['/']);
    },(error) => {
      console.log('Error is: ',error);
    });
  }

  // reset form on click on discard
  reset(form:NgForm){
    form.reset();
  }
}
