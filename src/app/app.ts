import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  // template:`<h1>gaurav bakare</h1>`,   ikde aapn html lihu shakto
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('My-First-Project');
}
