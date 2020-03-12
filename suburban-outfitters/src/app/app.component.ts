import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'suburban-outfitters';
  value = 'Clear me';
  categories: any
  constructor() { 
    this.categories = [
      { title: "Womens"}, 
      { title: "Accessories"}, 
      { title: "Home"},
      { title: "Kids & Baby"}]
  }
}
