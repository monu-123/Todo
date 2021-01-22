//Routing module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { CurrentTodoComponent } from './current-todo/current-todo.component';
import { AboutTodoComponent } from "./about-todo/about-todo.component";
//define routes for components
const routes: Routes = [
  {path:'' , component:CurrentTodoComponent},
  {path:'addTodo' , component:AddTodoComponent},
  {path:'deleteTodo' , component:DeleteTodoComponent},
  {path:'aboutTodo' , component:AboutTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
