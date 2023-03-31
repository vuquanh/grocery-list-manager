import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class AppGroceryComponent {
    task?: string;
    tasks = [];

    onClick(){
        this.tasks.push({name: this.task});
        this.task = '';
    }
}

