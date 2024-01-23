import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskTitle = 'Read cup of coffe';
  isComplete = false;

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  completeTask(){
    this.isComplete = true;
  }

  updateTitle(newTitle: string){
    this.taskTitle = newTitle;
  }
  
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
}
