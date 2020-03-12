import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  searchValue: string;

  constructor() { }

  ngOnInit(): void {
    this.searchValue = '';
  }

}
