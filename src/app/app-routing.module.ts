import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { WordCounterComponent } from './word-counter/word-counter.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"todo",component:TodoListComponent},
  {path:'wordC',component:WordCounterComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
