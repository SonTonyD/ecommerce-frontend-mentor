import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend-mentor-e-commerce';

  count = 0;

  setCounter(number: number) {
    this.count = number;
  }
}
