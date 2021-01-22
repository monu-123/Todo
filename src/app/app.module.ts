import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { CurrentTodoComponent } from './current-todo/current-todo.component';
import { AboutTodoComponent } from './about-todo/about-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    DeleteTodoComponent,
    CurrentTodoComponent,
    AboutTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
