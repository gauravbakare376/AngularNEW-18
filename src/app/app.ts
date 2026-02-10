import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  // template:`<h1>gaurav bakare</h1>`,   ikde aapn html lihu shakto
  styleUrl: './app.scss'
})
export class App implements OnInit{

  title = "gaurav bakare"
  
constructor(){
  console.log("constructor is called");
}

ngOnInit() {
  console.log("ngOnInit is called")    // lifecycle hook called after constructor
}

changeTitle() {
  this.title = "Rohini Bakare"
}






}
